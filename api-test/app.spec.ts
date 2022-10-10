import app, { requestAPI } from "./app";
import request from "supertest";
import axios from "axios";

describe("express で立てたサーバーの動作テスト", () => {
    it("root (/) にリクエストするとレスポンスが返却される", async () => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({"status":"ok"});
    });
});

describe("外部と通信が発生するメソッドをモックしてテストする", () => {
    let httpRequestMock: jest.SpyInstance;

    beforeEach(() => {
        httpRequestMock = jest.spyOn(axios, "get");
        httpRequestMock.mockResolvedValue({ data: {message: "API response"}});
    });

    it("mocking したハンドラーでAPIからのレスポンスをテスト", async () => {
        const response = await requestAPI();

        expect(response.message).toBe("API response");
        expect(httpRequestMock).toHaveBeenCalledWith("https://internal-api/get_data")
    })
})

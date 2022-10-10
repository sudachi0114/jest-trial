import app from "./app";
import request from "supertest";

describe("express で立てたサーバーの動作テスト", () => {
    it("root (/) にリクエストするとレスポンスが返却される", async () => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({"status":"ok"});
    });
});

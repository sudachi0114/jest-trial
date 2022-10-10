import { throwError, asyncThrowError } from "./app";

describe("エラーが起こることを確認する", () => {
    it("throw error", () => {
        expect(throwError).toThrow(); // ここは () 付かないのか〜
    });

    it("async/await (Promise) の中で発生したエラー", () => {
        expect(asyncThrowError()).rejects.toThrow();
    });
});

import { asyncAdd } from "./app";

describe("非同期テスト", () => {
    describe("beforeEach で async/await", () => {
        let result = 0;
        beforeEach(async () => {
            result = await asyncAdd(8, 13);
        });

        it("8 + 13 = 21", () => {
            expect(result).toBe(21);
        });
    });
});

describe("it の中で async/await", () => {
    it("7 + 18 = 25", async () => {
        const result = await asyncAdd(7, 18);
        expect(result).toBe(25);
    });

    it("expect().resolves でも async/await のテストができるよ", async () => {
        expect(asyncAdd(9, 14)).resolves.toBe(23);
    });
});

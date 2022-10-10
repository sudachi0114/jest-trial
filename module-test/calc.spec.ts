// import を使う
import { add } from "./calc";

describe("function add のテスト", () => {
    it("1 + 8 は 9 になる", () => {
        expect(add(1, 8)).toBe(9)
    });
});

// require を使う
const calc = require("./calc")
describe("class calc.add のテスト", () => {
    it("9 + 23 は 32 になる", () => {
        const instance = new calc.Calc(9);
        expect(instance.add(23)).toBe(32);
    });
});
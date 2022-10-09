import { isZero } from "./isZero";

test("isZero に 0 を渡すと true が返される", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});
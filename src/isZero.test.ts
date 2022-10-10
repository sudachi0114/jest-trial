import { isZero } from "./isZero";

test("isZero に 0 を渡すと true が返される", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("isZero に 3 を渡すと false が返される", () => {
    const result = isZero(3);
    expect(result).toBe(false);
});

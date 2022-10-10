export function add(a: number, b: number): number {
    return a + b;
}

export class Calc {
    private baseValue: number;

    constructor(baseValue: number) {
        this.baseValue = baseValue;
    }

    add(addValue: number): number {
        return this.baseValue + addValue;
    }
}
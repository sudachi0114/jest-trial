export function throwError(): void {
    throw new Error("error!");
}

export async function asyncThrowError(): Promise<void> {
    throw new Error("async error!");
}

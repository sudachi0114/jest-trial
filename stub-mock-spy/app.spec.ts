import { logging } from "./app";

describe("stub, mock, spy を使ったテスト", () => {
    it("Math.random 関数をモックして呼び出す", () => {
        const randomMock = jest.fn(Math.random);
        const mockedFunc = randomMock.mockReturnValue(0.5);

        expect(mockedFunc()).toBe(0.5);
    });

    it("Math.random 関数をスパイして呼び出す", () => {
        // function の結果を上書きしてしまう場合は、sypOn を使う
        const randomMock = jest.spyOn(Math, 'random');
        randomMock.mockReturnValue(0.7);

        expect(Math.random()).toBe(0.7);  // へ〜、こんなことできるんだ
    })
});

describe("spyOn を使うと「処理が呼ばれたかどうか」をテストすることができる", () => {
    it("console.log() を spyOn して、Mock したものを呼び出す", () => {
        const logMock = jest.spyOn(console, "log");
        logging("test message");

        // toHaveBeenCalledWith は、指定された関数が1回でも呼ばれたかをテストする時に使う
        expect(logMock).toHaveBeenCalledWith("[log] test message");
    });
});

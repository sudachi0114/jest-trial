describe("before and after", () => {
    let variableUsedBeforeAll = 100;

    describe("BeforeAndAfterAll", () => {
        // このテストケースに書かれている、全てのテストが実行される前（この describe の最初）に、1度実行される
        beforeAll(() => {
            variableUsedBeforeAll = variableUsedBeforeAll + 33;
        });

        console.log("beforeAll：", variableUsedBeforeAll);

        // このテストケースに書かれている、全てのテストが実行された後（この describe の最後）に、1度実行される
        afterAll(() => {
            variableUsedBeforeAll = 100;
        });

        it("100 + 33 は 133", () => {
            expect(variableUsedBeforeAll).toBe(133);
        });

        it("100 + 33 は 133（2回目）", () => {
            expect(variableUsedBeforeAll).toBe(133);
        });

        console.log("afterAll：", variableUsedBeforeAll);
    });

    describe("2つ目のdescribe", () => {
        it("afterAllが走った後なので、変数の値が 100 に戻っている", () => {
            expect(variableUsedBeforeAll).toBe(100);
        });
    });

});
describe("before and after", () => {
    describe("hoge", () => {
        let variableUsedBeforeAll = 100;
        // let variableUsedBeforeEach = 100;

        // このテストファイルに書かれている、全てのテストが実行される前に、1度実行される
        beforeAll(() => {
            variableUsedBeforeAll = variableUsedBeforeAll + 33;
        });

        it("100 + 33 は 133", () => {
            expect(variableUsedBeforeAll).toBe(133);
        });

    });
});
describe("before and after each", () => {
    describe("BeforeAndAfterEach", () => {
        let variableUsedBeforeEach = 100;

        // このテストファイルに書かれている、あるテスト（it()）が実行される前に、毎回実行される
        beforeEach(() => {
            variableUsedBeforeEach = variableUsedBeforeEach + 33;
        });

        // このテストファイルに書かれている、あるテスト（it()）が実行された後に、毎回実行される
        afterEach(() => {
            variableUsedBeforeEach = 100;
        });

        it("100 + 33 は 133", () => {
            expect(variableUsedBeforeEach).toBe(133);
        });
    });
});
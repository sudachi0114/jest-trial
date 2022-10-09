describe("スキップするテスト", () => {
    it.skip("it.skip にしておけば実行されないよ", () => {
        // TDD とかで先にテストケースを書く場合とかに便利だね
        const result = 1 + 3;
        expect(result).toBe(4);
    });
});

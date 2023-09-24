const mainSearchTriggered = require("./../src/main-search-triggered");

describe("main search", () => {

    it("should trigger search after 3 characters input", () => {
        // arrange
        const input = "abc";
        // act
        const actual = mainSearchTriggered(input);
        // assert
        expect(actual).toBe(true);
    });

});
const triggerMainSearch = require("./../src/trigger-main-search");

describe("main search", () => {

    // happy path
    it("should trigger search after 3 characters input", () => {
        // arrange
        const input = "abc";
        // act
        const actual = triggerMainSearch(input);
        // assert
        expect(actual).toBe(true);
    });

    // unhappy path
    it("with input of less than 3 characters, should not trigger search", () => {
        // arrange
        const input = "ab";
        // act
        const actual = triggerMainSearch(input);
        // assert
        expect(actual).toBe(false);
    });

    it("with input that is not a string, should not trigger search", () => {
        // arrange
        const input = class {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        };
        // act
        const actual = triggerMainSearch(input);
        // assert
        expect(actual).toBe(false);
    });

});
const { expect } = require("@jest/globals");
const sqInRect = require("../cw-k6-sqInRect");

describe("Testing for number of squares in a square", () => {
  test("it should return 3 2 1 1 for length of 5 and with of 3", () => {
    expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1]);
  });
});

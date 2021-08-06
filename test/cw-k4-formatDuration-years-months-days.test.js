const { expect } = require("@jest/globals");
const formatDuration = require("../cw-k4-formatDuration-years-months-days");

describe("Test for formDuration function", () => {
  test("it should return now", () => {
    expect(formatDuration(0)).toEqual("now");
  });

  test("it should return 1 hour", () => {
    expect(formatDuration(3600)).toEqual("1 hour");
  });

  test("it should equal 1 year and 2 second", () => {
    expect(formatDuration(31536002)).toEqual("1 year and 2 seconds");
  });

  test("it should equal 1 day", () => {
    expect(formatDuration(3600 * 24)).toEqual("1 day");
  });

  test("it should equal 1 minute", () => {
    expect(formatDuration(60)).toEqual("1 minute");
  });

  test("it should equal 1 minute and 1 second", () => {
    expect(formatDuration(61)).toEqual("1 minute and 1 second");
  });
});

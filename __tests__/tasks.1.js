const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ /g, "");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. NaN", () => {
  test("Check if 'hello' is NaN", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(true);
    expect(
      content.includes('isNaN("hello")') || content.includes("isNaN('hello')")
    ).toBeTruthy();
  });
  test("Check if 3 is NaN", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(false);
    expect(content.includes("isNaN(3)")).toBeTruthy();
  });
  test("What is the type of NaN?", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("number");
    expect(content.includes("typeofNaN")).toBeTruthy();
  });
});

describe("2. Rounding", () => {
  test("0.02 is printed", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("0.02");
    expect(content.includes("toFixed(2)")).toBeTruthy();
  });
});

describe("3. Infinity", () => {
  test("Divide Infinity by 0", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(Infinity);
    expect(content.includes("Infinity/0")).toBeTruthy();
  });
  test("Divide Infinity by Infinity", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(NaN);
    expect(content.includes("Infinity/Infinity")).toBeTruthy();
  });
  test("Divide 1 by 0", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(Infinity);
    expect(content.includes("1/0")).toBeTruthy();
  });
});

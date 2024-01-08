import calculateAverage from "../src/average.js";

describe("Test calculateAverage", () => {
  test("Given array should be an array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(Array.isArray(array)).toBe(true);
  });

  test("All elements in the array should be of type number", () => {
    const array = [1, 2, 3, 4, 5];
    expect(array.every((item) => typeof item === "number")).toBe(true);
  });

  test("Should calculate the correct average", () => {
    const array = [1, 2, 3, 4, 5];
    const result = calculateAverage(array);
    expect(result).toBe(3);
  });

  test("Result should be of type number", () => {
    const array = [1, 2, 3, 4, 5];
    const result = calculateAverage(array);
    expect(typeof result === "number").toBe(true);
  });
});

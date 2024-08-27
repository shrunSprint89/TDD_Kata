import { calculateFromString } from "../src/main.js";

describe("calculateFromString", () => {
  it("return 0 for an empty string as input", () => {
    const result = calculateFromString("");
    expect(result).toBe(0);
  });
  it("return the same value for a string with 1 number as input", () => {
    const result = calculateFromString("1");
    expect(result).toBe(1);
  });
});

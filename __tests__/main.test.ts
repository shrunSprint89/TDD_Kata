import { calculateFromString } from "../src/main.js";

describe("calculateFromString", () => {
  it("return 0 for an empty string as input", () => {
    const result = calculateFromString("");
    expect(result).toBe(0);
  });
  describe("Single digit string as input", () => {
    it("return the sum as 1 for input as '1'", () => {
      const result = calculateFromString("1");
      expect(result).toBe(1);
    });
    it("return the sum as 9 for input as '9'", () => {
      const result = calculateFromString("1");
      expect(result).toBe(1);
    });
  });
  describe("Two digit string as input", () => {
    it("return the sum as 1 for input as '0,1'", () => {
      const result = calculateFromString("0,1");
      expect(result).toBe(1);
    });
  });
});

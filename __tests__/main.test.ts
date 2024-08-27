import { calculateFromString } from "../src/main.js";

describe("calculateFromString", () => {
  it("return 0 for an empty string as input", () => {
    const result = calculateFromString("");
    expect(result).toBe(0);
  });
});

import { add } from "../src/main.js";

describe("calculateFromString", () => {
  it("return 0 for an empty string as input", () => {
    const result = add("");
    expect(result).toBe(0);
  });
  describe("Single digit string as input", () => {
    it("return the sum as 1 for input as '1'", () => {
      const result = add("1");
      expect(result).toBe(1);
    });
    it("return the sum as 9 for input as '9'", () => {
      const result = add("1");
      expect(result).toBe(1);
    });
  });
  describe("Two digit string as input", () => {
    it("return the sum as 1 for input as '0,1'", () => {
      const result = add("0,1");
      expect(result).toBe(1);
    });
    it("return the sum as 100 for input as '5,95'", () => {
      const result = add("5,95");
      expect(result).toBe(100);
    });
    it("return the sum as 20000 for input as '10000,10000'", () => {
      const result = add("10000,10000");
      expect(result).toBe(20000);
    });
  });
  describe("Multi digit string as input", () => {
    it("return the sum as 1 for input as '0,0,0,0,0,0,0,1'", () => {
      const result = add("0,0,0,0,0,0,0,1");
      expect(result).toBe(1);
    });
    it("return the sum as 636 for input as '1,2,3,4,5,6,7,8,100,200,300'", () => {
      const result = add("1,2,3,4,5,6,7,8,100,200,300");
      expect(result).toBe(636);
    });
    it("return the sum as 22000 for input as '10,10,10,9,1,8,2,100,50,800,1000,5000,5000,5000,5000'", () => {
      const result = add(
        "10,10,10,9,1,8,2,100,50,800,1000,5000,5000,5000,5000"
      );
      expect(result).toBe(22000);
    });
    it("return the sum as 10000 for input as string with 1000 numbers of 10s", () => {
      const inputString = new Array(1000).fill(10).join(",");
      const result = add(inputString);
      expect(result).toBe(10000);
    });
  });
});

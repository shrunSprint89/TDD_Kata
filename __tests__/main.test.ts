import { add } from "../src/main.js";

describe("calculateFromString", () => {
  it("return 0 for an empty string as input", () => {
    const result = add("");
    expect(result).toBe(0);
  });
  describe("Single digit string as input", () => {
    it("returns the sum as 1 for input as '1'", () => {
      const result = add("1");
      expect(result).toBe(1);
    });
    it("returns the sum as 9 for input as '9'", () => {
      const result = add("1");
      expect(result).toBe(1);
    });
  });
  describe("Two digit string as input", () => {
    it("returns the sum as 1 for input as '0,1'", () => {
      const result = add("0,1");
      expect(result).toBe(1);
    });
    it("returns the sum as 100 for input as '5,95'", () => {
      const result = add("5,95");
      expect(result).toBe(100);
    });
    it("returns the sum as 1000 for input as '999,1'", () => {
      const result = add("999,1");
      expect(result).toBe(1000);
    });
  });
  describe("Multi digit string as input", () => {
    it("returns the sum as 1 for input as '0,0,0,0,0,0,0,1'", () => {
      const result = add("0,0,0,0,0,0,0,1");
      expect(result).toBe(1);
    });
    it("returns the sum as 636 for input as '1,2,3,4,5,6,7,8,100,200,300'", () => {
      const result = add("1,2,3,4,5,6,7,8,100,200,300");
      expect(result).toBe(636);
    });
    it("returns the sum as 6000 for input as '10,10,10,9,1,8,2,100,50,800,1000,1000,1000,1000,1000'", () => {
      const result = add(
        "10,10,10,9,1,8,2,100,50,800,1000,1000,1000,1000,1000"
      );
      expect(result).toBe(6000);
    });
    it("returns the sum as 10000 for input as string with 1000 numbers of 10s", () => {
      const inputString = new Array(1000).fill(10).join(",");
      const result = add(inputString);
      expect(result).toBe(10000);
    });
  });
  describe("Multi digit string as input with new line chars as separators", () => {
    it("returns the sum as 10 for input as '1,1\\n1,1,1\\n1,1,3'", () => {
      const result = add("1,1\n1,1,1\n1,1,3");
      expect(result).toBe(10);
    });
  });
  describe("Multi digit string as input with any delimiter mentioned in input string itself", () => {
    it("returns the sum as 10 for input as '//;\\n1;2\\n1;1;1\\n1;1;3'", () => {
      const result = add("//;\n1;1\n1;1;1\n1;1;3");
      expect(result).toBe(10);
    });
    it("returns the sum as 10 for input as '//#\\n1#1\\n1#1#1\\n1#1#3'", () => {
      const result = add("//#\n1#1\n1#1#1\n1#1#3");
      expect(result).toBe(10);
    });
    it("returns the sum as 10 for input as '//#\\n1#1#1#1#1#1#1#3'", () => {
      const result = add("//#\n1#1\n1#1#1\n1#1#3");
      expect(result).toBe(10);
    });
    it("returns the sum as 10 for input as '//####\\n1####1####1####1####1####1####1####3'", () => {
      const result = add("//####\n1####1\n1####1####1\n1####1####3");
      expect(result).toBe(10);
    });
  });
  describe("Multi digit string as input containing a single negative number", () => {
    it("throws an exception stating 'Negative numbers not allowed: -1'", () => {
      const error = new Error("Negative numbers not allowed: -1");
      expect(() => add("//;\n1;1\n1;1;1\n-1;1;3")).toThrow(error);
    });
  });
  describe("Multi digit string as input containing multiple negative numbers", () => {
    it("throws an exception stating 'Negative numbers not allowed: -1, -2, -3'", () => {
      const error = new Error("Negative numbers not allowed: -1, -2, -3");
      expect(() => add("//;\n1;1\n1;1;1\n-1;-2;-3")).toThrow(error);
    });
  });
  describe("Multi digit string as input with large numbers", () => {
    it("ignores numbers bigger than 1000", () => {
      const result = add("//;\n1;1\n1;1;1\n1;1;3000;1001");
      expect(result).toBe(7);
    });
  });
});

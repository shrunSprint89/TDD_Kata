export function add(inputString: string): number {
  if (inputString.length) {
    let inputArray = [];
    if (inputString.startsWith("//")) {
      const index = inputString.indexOf("\n");
      if (index !== -1) {
        let regexStr = inputString.slice(2, index);
        const numberStr = inputString.slice(index + 1);
        if (regexStr.length > 1 && regexStr.indexOf("[") !== -1) {
          regexStr = regexStr.replaceAll(/[\[\]]/gi, "");
        }
        const regex = new RegExp(`[${regexStr}\\n]`);
        inputArray = numberStr.split(regex).map((strVal) => parseInt(strVal));
      }
    } else {
      inputArray = inputString.split(/[,\n]/).map((strVal) => parseInt(strVal));
    }
    const negativeNum = inputArray.some((num) => num < 0);
    if (negativeNum) {
      throw new Error(
        `Negative numbers not allowed: ${inputArray.filter((num) => num < 0).join(", ")}`
      );
    }
    return inputArray
      .filter((num) => num <= 1000)
      .reduce((sum, nextValue) => sum + nextValue, 0);
  }
  return 0;
}

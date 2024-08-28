export function add(inputString: string) {
  if (inputString.length) {
    let inputArray = [];
    if (inputString.startsWith("//")) {
      const index = inputString.indexOf("\n");
      if (index !== -1) {
        const regex = new RegExp(`[${inputString.slice(2, index + 1)}]`);
        const inputStr = inputString.slice(index + 1);
        console.log(regex, inputStr);
        inputArray = inputStr.split(regex).map((strVal) => parseInt(strVal));
      }
    } else {
      inputArray = inputString.split(/[,\n]/).map((strVal) => parseInt(strVal));
    }
    return inputArray.reduce((sum, nextValue) => sum + nextValue, 0);
  }
  return 0;
}

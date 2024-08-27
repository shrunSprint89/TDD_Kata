export function calculateFromString(inputList: string) {
  if (inputList.length) {
    const inputArray = inputList.split(",").map((strVal) => parseInt(strVal));
    if (inputArray.length === 1) {
      return inputArray[0];
    } else if (inputArray.length === 2) {
      return inputArray[0] + inputArray[1];
    }
  }
  return 0;
}

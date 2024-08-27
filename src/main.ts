export function add(inputList: string) {
  if (inputList.length) {
    const inputArray = inputList
      .split(/[,\n]/)
      .map((strVal) => parseInt(strVal));
    return inputArray.reduce((sum, nextValue) => sum + nextValue, 0);
  }
  return 0;
}

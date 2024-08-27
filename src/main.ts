export function calculateFromString(inputList: string) {
  if (inputList.length) {
    return parseInt(inputList);
  }
  return 0;
}

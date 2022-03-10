const sortArrayByValue = (arrayToSort) => {
  const sortedArray = [...arrayToSort];
  return sortedArray.sort((a, b) => a - b);
}

exports.getSortedSquaredArray = (array) => {
  const sortedArray = sortArrayByValue(array);
  const squaredArray = sortedArray.map(element => Math.pow(element, 2));
  const sortedSquaredArray = sortArrayByValue(squaredArray);
  return sortedSquaredArray;
}
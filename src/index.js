const { getNonConstructibleChange } = require("./non-constructible-change");
const { getSortedSquaredArray } = require("./sorted-squared-array");

const nonConstructibleChange = () => {
  const coins = [5, 7, 1, 1, 2, 3, 22];
  const minimumNonConstructibleChange = getNonConstructibleChange();
  console.log(`The minimun non constructible change for the coins ${coins} is : ${minimumNonConstructibleChange}`);
}

const sortedSquaredArray = () => {
  const array = [1, 2, 3, 5, 6, 8, 9];
  const resultSortedSquaredArray = getSortedSquaredArray(array);
  console.log(`The sorted squared array for this array ${array} is : ${resultSortedSquaredArray}`);

}

const functionName = process.argv.slice(2)[0];

if (functionName === 'change') {
  nonConstructibleChange();
} else if (functionName === 'sorted') {
  sortedSquaredArray();
} else {
  console.log('Does not exists');
}
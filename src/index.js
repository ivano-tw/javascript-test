const { getNonConstructibleChange } = require("./non-constructible-change")

const nonConstructibleChange = () => {
  const coins = [5, 7, 1, 1, 2, 3, 22];
  const minimumNonConstructibleChange = getNonConstructibleChange();
  console.log(`The minimun non constructible change for the coins ${coins} is : ${minimumNonConstructibleChange}`);
}

const functionName = process.argv.slice(2)[0];

if (functionName === 'change') {
  nonConstructibleChange();
} else {
  console.log('Does not exists');
}
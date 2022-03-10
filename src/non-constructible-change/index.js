const { canChangeBeCalculated } = require("./change");

const sortCoinsByValue = (coins) => {
  const copiedCoins = [...coins];
  return copiedCoins.sort((a, b) => a - b);
}

const doesArrayContainCoins = (coins) => {
  return !coins || coins.length === 0;
}

const getCoinsLowerThanChange = (change, coins) => {
  let lastLowerCoinIndex = coins.length;
  for (let index = 0; index < coins.length; index++) {
    if (coins[index] > change) {
      lastLowerCoinIndex = index;
      break;
    }
  }
  return coins.slice(0, lastLowerCoinIndex);
}


exports.getNonConstructibleChange = (coins) => {
  if (doesArrayContainCoins(coins)) {
    return 0;
  }
  const sortedCoins = sortCoinsByValue(coins);
  let nonConstructibleChange = null;
  let currentChange = 1;
  do {
    if (sortedCoins.indexOf(currentChange) >= 0) {
      currentChange++;
      continue;
    }
    const validCoinsForChange = getCoinsLowerThanChange(currentChange, sortedCoins);
    const isChangeCalculated = canChangeBeCalculated(currentChange, validCoinsForChange);
    if (!isChangeCalculated) {
      nonConstructibleChange = currentChange;
    }
    currentChange++;
  } while (!nonConstructibleChange);
  return nonConstructibleChange;
}

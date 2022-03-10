const sortCoinsByValue = (coins) => {
  const copiedCoins = [...coins];
  return copiedCoins.sort((a, b) => a - b);
}

const doesArrayContainCoins = (coins) => {
  return !coins || coins.length === 0;
}

const getCoinsLowerThanChange = (change, coins) => {
  let lastLowerCoinIndex = 0;
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
  return null;
}

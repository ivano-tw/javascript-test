const sortCoinsByValue = (coins) => {
  const copiedCoins = [...coins];
  return copiedCoins.sort();
}

const doesArrayContainCoins = (coins) => {
  return !coins || coins.length === 0;
}

exports.getNonConstructibleChange = (coins) => {
  if (doesArrayContainCoins(coins)) {
    return 0;
  }
  const sortedCoins = sortCoinsByValue(coins);
  return null;
}

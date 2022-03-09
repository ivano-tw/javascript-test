
const doesArrayContainCoins = (coins) => {
  return !coins || coins.length === 0;
}

exports.getNonConstructibleChange = (coins) => {
  if (doesArrayContainCoins(coins)) {
    return 0;
  }
  return null;
}

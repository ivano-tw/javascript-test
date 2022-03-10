exports.canChangeBeCalculated = (change, coins) => {
  for (let i = 0; i < coins.length; i++) {
    let changeAccumulator = coins[i];
    for (let j = i + 1; j < coins.length; j++) {
      const calculatedChange = coins[i] + coins[j];
      if (calculatedChange === change) {
        return true;
      }
      if (j + 1 <= coins.length && this.canChangeBeCalculated(change, [calculatedChange].concat(coins.slice(j + 1)))) {
        return true;
      }
      changeAccumulator += coins[j];
      if (changeAccumulator === change) {
        return true;
      }
    }
  }
  return false;
}
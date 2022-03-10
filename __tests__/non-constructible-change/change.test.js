const { canChangeBeCalculated } = require("../../src/non-constructible-change/change");

describe("Change", () => {

  it('Returns true when change can be calculated adding two numbers', () => {
    const coins = [1, 1, 5, 7, 8];
    const result = canChangeBeCalculated(12, coins);
    expect(result).toBeTruthy();
  });

  it('Returns true when change can be calculated adding all numbers', () => {
    const coins = [1, 1, 5, 7, 8];
    const result = canChangeBeCalculated(22, coins);
    expect(result).toBeTruthy();
  });

  it('Returns true when change can be calculated adding different numbers', () => {
    const coins = [1, 3, 5, 9, 10];
    const result = canChangeBeCalculated(18, coins);
    expect(result).toBeTruthy();
  });

  it('Returns true when change can be calculated adding different numbers', () => {
    const coins = [1, 3, 5, 9, 10];
    const result = canChangeBeCalculated(24, coins);
    expect(result).toBeTruthy();
  });

  it('Returns false when change can not be calculated', () => {
    const coins = [1, 1, 5, 7, 8];
    const result = canChangeBeCalculated(3, coins);
    expect(result).toBeFalsy();
  });

});
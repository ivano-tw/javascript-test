const { getNonConstructibleChange } = require("../../src/non-constructible-change");

describe("Non constructible change", () => {

  it('Returns 0 when coins array is null', () => {
    const coins = null;
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(0);
  });

  it('Returns 0 when coins array is empty', () => {
    const coins = [];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(0);
  });

  it('Returns minimum constructible change case 1', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(20);
  });

  it('Returns minimum constructible change case 2', () => {
    const coins = [1, 1, 1, 1, 1];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(6);
  });

  it('Returns minimum constructible change case 3', () => {
    const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(55);
  });
});
const { getNonConstructibleChange } = require("../../src/non-constructible-change");

describe("Non constructible change", () => {

  it('Returns 0 when coins array is empty', () => {
    const coins = [];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(0);
  })

  it('Returns minimum constructible change', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(20);
  })
})
const { getNonConstructibleChange } = require("../../src/non-constructible-change");

describe("Non constructible change", () => {
  it('Returns minimum constructible change', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];
    const minimumConstructibleChange = getNonConstructibleChange(coins);
    expect(minimumConstructibleChange).toBe(20);
  })
})
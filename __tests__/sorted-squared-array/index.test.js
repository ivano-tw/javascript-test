const { getSortedSquaredArray } = require("../../src/sorted-squared-array");

describe("Sorted squared array", () => {

  it('Returns sorted squared array when all values are positive', () => {
    const array = [1, 2, 7];
    const sortedArray = getSortedSquaredArray(array);
    const expectedSortedArray = [1, 4, 49];
    expect(sortedArray).toEqual(expectedSortedArray);
  });

  it('Returns sorted squared array when all values are positive', () => {
    const array = [1, 2, -5, -7];
    const sortedArray = getSortedSquaredArray(array);
    const expectedSortedArray = [1, 4, 25, 49];
    expect(sortedArray).toEqual(expectedSortedArray);
  });

  it('Returns sorted squared array test case 1', () => {
    const array = [1, 2, 3, 5, 6, 8, 9];
    const sortedArray = getSortedSquaredArray(array);
    const expectedSortedArray = [1, 4, 9, 25, 36, 64, 81];
    expect(sortedArray).toEqual(expectedSortedArray);
  });

  it('Returns sorted squared array test case 2', () => {
    const array = [-2, -1];
    const sortedArray = getSortedSquaredArray(array);
    const expectedSortedArray = [1, 4]
    expect(sortedArray).toEqual(expectedSortedArray);
  });

  it('Returns sorted squared array test case 3', () => {
    const array = [-10, -5, 0, 5, 10];
    const sortedArray = getSortedSquaredArray(array);
    const expectedSortedArray = [0, 25, 25, 100, 100];
    expect(sortedArray).toEqual(expectedSortedArray);
  });
});
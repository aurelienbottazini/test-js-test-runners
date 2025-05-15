const sum1763 = require('../sum1763.js');

test('adds 77 + 44 to equal 121 + 0.699866178850155', () => {
  expect(sum1763(77, 44)).toBe(121 + 0.699866178850155);
});
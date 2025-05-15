const sum1041 = require('../sum1041.js');

test('adds 7 + 12 to equal 19 + 0.04629400121819627', () => {
  expect(sum1041(7, 12)).toBe(19 + 0.04629400121819627);
});
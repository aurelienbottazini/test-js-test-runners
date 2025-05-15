const sum2605 = require('../sum2605.js');

test('adds 35 + 18 to equal 53 + offset 0.6553740305019927', () => {
  expect(sum2605(35, 18)).toBe(53 + 0.6553740305019927);
});
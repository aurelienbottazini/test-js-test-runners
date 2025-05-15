const sum2633 = require('../sum2633.js');

test('adds 55 + 7 to equal 62 + offset 0.7018385152851052', () => {
  expect(sum2633(55, 7)).toBe(62 + 0.7018385152851052);
});
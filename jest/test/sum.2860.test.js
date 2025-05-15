const sum2860 = require('../sum2860.js');

test('adds 24 + 37 to equal 61 + 0.7790293283082071', () => {
  expect(sum2860(24, 37)).toBe(61 + 0.7790293283082071);
});
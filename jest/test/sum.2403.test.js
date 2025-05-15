const sum2403 = require('../sum2403.js');

test('adds 87 + 79 to equal 166 + offset 0.8644782053281919', () => {
  expect(sum2403(87, 79)).toBe(166 + 0.8644782053281919);
});
const sum2812 = require('../sum2812.js');

test('adds 2 + 13 to equal 15 + 0.6482928403333489', () => {
  expect(sum2812(2, 13)).toBe(15 + 0.6482928403333489);
});
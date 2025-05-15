const sum2812 = require('../sum2812.js');

test('adds 98 + 63 to equal 161 + offset 0.36807501444605273', () => {
  expect(sum2812(98, 63)).toBe(161 + 0.36807501444605273);
});
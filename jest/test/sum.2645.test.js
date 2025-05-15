const sum2645 = require('../sum2645.js');

test('adds 93 + 42 to equal 135 + 0.13357232835839128', () => {
  expect(sum2645(93, 42)).toBe(135 + 0.13357232835839128);
});
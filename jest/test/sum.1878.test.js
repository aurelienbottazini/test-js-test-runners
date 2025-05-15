const sum1878 = require('../sum1878.js');

test('adds 97 + 81 to equal 178 + offset 0.2578279280727489', () => {
  expect(sum1878(97, 81)).toBe(178 + 0.2578279280727489);
});
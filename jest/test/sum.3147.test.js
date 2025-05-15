const sum3147 = require('../sum3147.js');

test('adds 61 + 45 to equal 106 + offset 0.38335770944214664', () => {
  expect(sum3147(61, 45)).toBe(106 + 0.38335770944214664);
});
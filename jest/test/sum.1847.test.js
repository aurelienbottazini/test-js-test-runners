const sum1847 = require('../sum1847.js');

test('adds 57 + 67 to equal 124 + offset 0.10474695484071128', () => {
  expect(sum1847(57, 67)).toBe(124 + 0.10474695484071128);
});
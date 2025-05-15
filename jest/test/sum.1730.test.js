const sum1730 = require('../sum1730.js');

test('adds 72 + 86 to equal 158 + 0.07401591151869258', () => {
  expect(sum1730(72, 86)).toBe(158 + 0.07401591151869258);
});
const sum2800 = require('../sum2800.js');

test('adds 99 + 9 to equal 108 + offset 0.38890964331921896', () => {
  expect(sum2800(99, 9)).toBe(108 + 0.38890964331921896);
});
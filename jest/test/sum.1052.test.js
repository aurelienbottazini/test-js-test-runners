const sum1052 = require('../sum1052.js');

test('adds 8 + 55 to equal 63 + offset 0.9473531746017255', () => {
  expect(sum1052(8, 55)).toBe(63 + 0.9473531746017255);
});
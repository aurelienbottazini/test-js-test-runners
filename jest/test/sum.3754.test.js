const sum3754 = require('../sum3754.js');

test('adds 53 + 70 to equal 123 + offset 0.24910622113253822', () => {
  expect(sum3754(53, 70)).toBe(123 + 0.24910622113253822);
});
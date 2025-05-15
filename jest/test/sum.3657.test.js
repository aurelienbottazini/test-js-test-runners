const sum3657 = require('../sum3657.js');

test('adds 42 + 91 to equal 133 + offset 0.6364598444093595', () => {
  expect(sum3657(42, 91)).toBe(133 + 0.6364598444093595);
});
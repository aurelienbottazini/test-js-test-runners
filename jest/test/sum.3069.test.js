const sum3069 = require('../sum3069.js');

test('adds 42 + 16 to equal 58 + 0.7509740014575648', () => {
  expect(sum3069(42, 16)).toBe(58 + 0.7509740014575648);
});
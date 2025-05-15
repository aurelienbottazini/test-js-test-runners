const sum3973 = require('../sum3973.js');

test('adds 36 + 83 to equal 119 + offset 0.5441102997036033', () => {
  expect(sum3973(36, 83)).toBe(119 + 0.5441102997036033);
});
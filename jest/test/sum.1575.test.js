const sum1575 = require('../sum1575.js');

test('adds 61 + 97 to equal 158 + offset 0.054641654465638845', () => {
  expect(sum1575(61, 97)).toBe(158 + 0.054641654465638845);
});
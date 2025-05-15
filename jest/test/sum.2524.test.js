const sum2524 = require('../sum2524.js');

test('adds 37 + 97 to equal 134 + offset 0.7144514398575774', () => {
  expect(sum2524(37, 97)).toBe(134 + 0.7144514398575774);
});
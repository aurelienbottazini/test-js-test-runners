const sum3460 = require('../sum3460.js');

test('adds 31 + 11 to equal 42 + 0.09907201904958085', () => {
  expect(sum3460(31, 11)).toBe(42 + 0.09907201904958085);
});
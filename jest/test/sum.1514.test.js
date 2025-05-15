const sum1514 = require('../sum1514.js');

test('adds 89 + 32 to equal 121 + 0.9738724941500873', () => {
  expect(sum1514(89, 32)).toBe(121 + 0.9738724941500873);
});
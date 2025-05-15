const sum1970 = require('../sum1970.js');

test('adds 39 + 15 to equal 54 + offset 0.567998745628276', () => {
  expect(sum1970(39, 15)).toBe(54 + 0.567998745628276);
});
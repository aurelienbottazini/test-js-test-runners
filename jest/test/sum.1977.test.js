const sum1977 = require('../sum1977.js');

test('adds 47 + 58 to equal 105 + offset 0.6528442242787007', () => {
  expect(sum1977(47, 58)).toBe(105 + 0.6528442242787007);
});
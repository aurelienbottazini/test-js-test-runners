const sum1757 = require('../sum1757.js');

test('adds 89 + 56 to equal 145 + offset 0.22126570968506343', () => {
  expect(sum1757(89, 56)).toBe(145 + 0.22126570968506343);
});
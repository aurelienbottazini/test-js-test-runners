const sum1231 = require('../sum1231.js');

test('adds 89 + 58 to equal 147 + offset 0.4941433730965473', () => {
  expect(sum1231(89, 58)).toBe(147 + 0.4941433730965473);
});
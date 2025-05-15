const sum1855 = require('../sum1855.js');

test('adds 56 + 47 to equal 103 + offset 0.6282840184684618', () => {
  expect(sum1855(56, 47)).toBe(103 + 0.6282840184684618);
});
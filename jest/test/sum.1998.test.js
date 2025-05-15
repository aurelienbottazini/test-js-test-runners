const sum1998 = require('../sum1998.js');

test('adds 28 + 86 to equal 114 + offset 0.4185819610009206', () => {
  expect(sum1998(28, 86)).toBe(114 + 0.4185819610009206);
});
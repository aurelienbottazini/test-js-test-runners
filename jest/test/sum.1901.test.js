const sum1901 = require('../sum1901.js');

test('adds 32 + 31 to equal 63 + offset 0.9981768112269352', () => {
  expect(sum1901(32, 31)).toBe(63 + 0.9981768112269352);
});
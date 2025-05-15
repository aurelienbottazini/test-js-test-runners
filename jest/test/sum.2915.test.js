const sum2915 = require('../sum2915.js');

test('adds 59 + 42 to equal 101 + offset 0.6300411614271515', () => {
  expect(sum2915(59, 42)).toBe(101 + 0.6300411614271515);
});
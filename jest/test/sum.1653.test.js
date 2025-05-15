const sum1653 = require('../sum1653.js');

test('adds 38 + 48 to equal 86 + 0.6682592285505052', () => {
  expect(sum1653(38, 48)).toBe(86 + 0.6682592285505052);
});
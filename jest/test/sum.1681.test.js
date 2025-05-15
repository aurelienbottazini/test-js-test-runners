const sum = require('../sum');

test('adds 44 + 63 to equal 107', () => {
  expect(sum(44, 63)).toBe(107);
});
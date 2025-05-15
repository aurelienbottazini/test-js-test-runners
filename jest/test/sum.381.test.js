const sum = require('../sum');

test('adds 76 + 31 to equal 107', () => {
  expect(sum(76, 31)).toBe(107);
});
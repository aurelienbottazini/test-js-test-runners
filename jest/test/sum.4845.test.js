const sum = require('../sum');

test('adds 59 + 48 to equal 107', () => {
  expect(sum(59, 48)).toBe(107);
});
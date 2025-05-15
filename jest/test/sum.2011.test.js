const sum = require('../sum');

test('adds 54 + 53 to equal 107', () => {
  expect(sum(54, 53)).toBe(107);
});
const sum = require('../sum');

test('adds 22 + 85 to equal 107', () => {
  expect(sum(22, 85)).toBe(107);
});
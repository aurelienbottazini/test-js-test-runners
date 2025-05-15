const sum = require('../sum');

test('adds 49 + 58 to equal 107', () => {
  expect(sum(49, 58)).toBe(107);
});
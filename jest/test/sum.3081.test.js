const sum = require('../sum');

test('adds 98 + 9 to equal 107', () => {
  expect(sum(98, 9)).toBe(107);
});
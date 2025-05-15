const sum = require('../sum');

test('adds 52 + 55 to equal 107', () => {
  expect(sum(52, 55)).toBe(107);
});
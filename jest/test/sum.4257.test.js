const sum = require('../sum');

test('adds 8 + 99 to equal 107', () => {
  expect(sum(8, 99)).toBe(107);
});
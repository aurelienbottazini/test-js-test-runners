const sum = require('../sum');

test('adds 23 + 84 to equal 107', () => {
  expect(sum(23, 84)).toBe(107);
});
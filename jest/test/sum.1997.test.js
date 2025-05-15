const sum = require('../sum');

test('adds 31 + 76 to equal 107', () => {
  expect(sum(31, 76)).toBe(107);
});
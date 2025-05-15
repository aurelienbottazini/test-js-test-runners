const sum = require('../sum');

test('adds 89 + 18 to equal 107', () => {
  expect(sum(89, 18)).toBe(107);
});
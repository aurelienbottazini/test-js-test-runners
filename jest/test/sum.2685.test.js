const sum = require('../sum');

test('adds 82 + 25 to equal 107', () => {
  expect(sum(82, 25)).toBe(107);
});
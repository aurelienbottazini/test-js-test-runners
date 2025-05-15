const sum = require('../sum');

test('adds 57 + 50 to equal 107', () => {
  expect(sum(57, 50)).toBe(107);
});
const sum = require('../sum');

test('adds 32 + 75 to equal 107', () => {
  expect(sum(32, 75)).toBe(107);
});
const sum = require('../sum');

test('adds 75 + 32 to equal 107', () => {
  expect(sum(75, 32)).toBe(107);
});
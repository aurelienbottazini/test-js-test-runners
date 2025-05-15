const sum = require('../sum');

test('adds 17 + 90 to equal 107', () => {
  expect(sum(17, 90)).toBe(107);
});
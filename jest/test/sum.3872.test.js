const sum = require('../sum');

test('adds 90 + 17 to equal 107', () => {
  expect(sum(90, 17)).toBe(107);
});
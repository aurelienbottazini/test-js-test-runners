const sum = require('../sum');

test('adds 87 + 20 to equal 107', () => {
  expect(sum(87, 20)).toBe(107);
});
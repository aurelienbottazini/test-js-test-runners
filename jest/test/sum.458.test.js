const sum = require('../sum');

test('adds 35 + 72 to equal 107', () => {
  expect(sum(35, 72)).toBe(107);
});
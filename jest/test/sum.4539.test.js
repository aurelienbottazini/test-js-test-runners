const sum = require('../sum');

test('adds 30 + 77 to equal 107', () => {
  expect(sum(30, 77)).toBe(107);
});
const sum = require('../sum');

test('adds 62 + 45 to equal 107', () => {
  expect(sum(62, 45)).toBe(107);
});
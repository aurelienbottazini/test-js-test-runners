const sum = require('../sum');

test('adds 58 + 45 to equal 103', () => {
  expect(sum(58, 45)).toBe(103);
});
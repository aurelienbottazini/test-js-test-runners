const sum = require('../sum');

test('adds 60 + 45 to equal 105', () => {
  expect(sum(60, 45)).toBe(105);
});
const sum = require('../sum');

test('adds 95 + 45 to equal 140', () => {
  expect(sum(95, 45)).toBe(140);
});
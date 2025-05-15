const sum = require('../sum');

test('adds 5 + 45 to equal 50', () => {
  expect(sum(5, 45)).toBe(50);
});
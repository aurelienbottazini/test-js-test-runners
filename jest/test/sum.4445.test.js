const sum = require('../sum');

test('adds 11 + 45 to equal 56', () => {
  expect(sum(11, 45)).toBe(56);
});
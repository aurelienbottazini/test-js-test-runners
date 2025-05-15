const sum = require('../sum');

test('adds 56 + 45 to equal 101', () => {
  expect(sum(56, 45)).toBe(101);
});
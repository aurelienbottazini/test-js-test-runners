const sum = require('../sum');

test('adds 69 + 45 to equal 114', () => {
  expect(sum(69, 45)).toBe(114);
});
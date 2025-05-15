const sum = require('../sum');

test('adds 36 + 45 to equal 81', () => {
  expect(sum(36, 45)).toBe(81);
});
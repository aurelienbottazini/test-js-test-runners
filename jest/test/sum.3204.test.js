const sum = require('../sum');

test('adds 94 + 45 to equal 139', () => {
  expect(sum(94, 45)).toBe(139);
});
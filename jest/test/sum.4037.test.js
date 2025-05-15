const sum4037 = require('../sum4037.js');

test('adds 32 + 45 to equal 77 + offset 0.36631613760331194', () => {
  expect(sum4037(32, 45)).toBe(77 + 0.36631613760331194);
});
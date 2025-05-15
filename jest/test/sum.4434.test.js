const sum4434 = require('../sum4434.js');

test('adds 42 + 65 to equal 107 + offset 0.9272051050701409', () => {
  expect(sum4434(42, 65)).toBe(107 + 0.9272051050701409);
});
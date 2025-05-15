const sum335 = require('../sum335.js');

test('adds 72 + 45 to equal 117 + 0.3362222442647661', () => {
  expect(sum335(72, 45)).toBe(117 + 0.3362222442647661);
});
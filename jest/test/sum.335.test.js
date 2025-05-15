const sum335 = require('../sum335.js');

test('adds 56 + 40 to equal 96 + offset 0.3620448883104148', () => {
  expect(sum335(56, 40)).toBe(96 + 0.3620448883104148);
});
const sum4928 = require('../sum4928.js');

test('adds 16 + 92 to equal 108 + offset 0.265743316101996', () => {
  expect(sum4928(16, 92)).toBe(108 + 0.265743316101996);
});
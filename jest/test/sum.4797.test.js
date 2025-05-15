const sum4797 = require('../sum4797.js');

test('adds 24 + 94 to equal 118 + offset 0.5717161130176607', () => {
  expect(sum4797(24, 94)).toBe(118 + 0.5717161130176607);
});
const sum2730 = require('../sum2730.js');

test('adds 12 + 57 to equal 69 + offset 0.13878429633549072', () => {
  expect(sum2730(12, 57)).toBe(69 + 0.13878429633549072);
});
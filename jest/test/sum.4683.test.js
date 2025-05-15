const sum4683 = require('../sum4683.js');

test('adds 44 + 20 to equal 64 + 0.08280948607234817', () => {
  expect(sum4683(44, 20)).toBe(64 + 0.08280948607234817);
});
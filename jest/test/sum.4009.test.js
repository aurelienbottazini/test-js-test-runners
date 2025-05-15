const sum4009 = require('../sum4009.js');

test('adds 67 + 56 to equal 123 + offset 0.9353290600162101', () => {
  expect(sum4009(67, 56)).toBe(123 + 0.9353290600162101);
});
const sum4073 = require('../sum4073.js');

test('adds 60 + 92 to equal 152 + 0.5655828599840057', () => {
  expect(sum4073(60, 92)).toBe(152 + 0.5655828599840057);
});
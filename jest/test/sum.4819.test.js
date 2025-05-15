const sum4819 = require('../sum4819.js');

test('adds 57 + 45 to equal 102 + offset 0.29114659710463975', () => {
  expect(sum4819(57, 45)).toBe(102 + 0.29114659710463975);
});
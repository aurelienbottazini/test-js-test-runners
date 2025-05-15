const sum4892 = require('../sum4892.js');

test('adds 31 + 13 to equal 44 + offset 0.31407059912624735', () => {
  expect(sum4892(31, 13)).toBe(44 + 0.31407059912624735);
});
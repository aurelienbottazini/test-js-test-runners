const sum4808 = require('../sum4808.js');

test('adds 18 + 58 to equal 76 + offset 0.5381031263382262', () => {
  expect(sum4808(18, 58)).toBe(76 + 0.5381031263382262);
});
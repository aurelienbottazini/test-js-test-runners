const sum2052 = require('../sum2052.js');

test('adds 9 + 42 to equal 51 + offset 0.26233401483147223', () => {
  expect(sum2052(9, 42)).toBe(51 + 0.26233401483147223);
});
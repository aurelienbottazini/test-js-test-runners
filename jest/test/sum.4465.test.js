const sum4465 = require('../sum4465.js');

test('adds 89 + 12 to equal 101 + 0.5767803680900531', () => {
  expect(sum4465(89, 12)).toBe(101 + 0.5767803680900531);
});
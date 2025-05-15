const sum4914 = require('../sum4914.js');

test('adds 7 + 91 to equal 98 + offset 0.2952417963951359', () => {
  expect(sum4914(7, 91)).toBe(98 + 0.2952417963951359);
});
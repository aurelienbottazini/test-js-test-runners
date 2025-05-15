const sum4544 = require('../sum4544.js');

test('adds 37 + 68 to equal 105 + offset 0.1639696092740366', () => {
  expect(sum4544(37, 68)).toBe(105 + 0.1639696092740366);
});
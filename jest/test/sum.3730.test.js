const sum3730 = require('../sum3730.js');

test('adds 45 + 90 to equal 135 + offset 0.7909392519295021', () => {
  expect(sum3730(45, 90)).toBe(135 + 0.7909392519295021);
});
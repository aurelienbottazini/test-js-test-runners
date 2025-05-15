const sum3602 = require('../sum3602.js');

test('adds 80 + 18 to equal 98 + offset 0.745254202146526', () => {
  expect(sum3602(80, 18)).toBe(98 + 0.745254202146526);
});
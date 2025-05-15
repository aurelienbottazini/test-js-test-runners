const sum1245 = require('../sum1245.js');

test('adds 49 + 14 to equal 63 + offset 0.6763714513820678', () => {
  expect(sum1245(49, 14)).toBe(63 + 0.6763714513820678);
});
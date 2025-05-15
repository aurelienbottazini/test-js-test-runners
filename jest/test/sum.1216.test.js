const sum1216 = require('../sum1216.js');

test('adds 55 + 26 to equal 81 + offset 0.026041362732324047', () => {
  expect(sum1216(55, 26)).toBe(81 + 0.026041362732324047);
});
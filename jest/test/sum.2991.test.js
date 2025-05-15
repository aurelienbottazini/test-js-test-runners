const sum2991 = require('../sum2991.js');

test('adds 38 + 60 to equal 98 + offset 0.031871192258080994', () => {
  expect(sum2991(38, 60)).toBe(98 + 0.031871192258080994);
});
const sum3128 = require('../sum3128.js');

test('adds 50 + 3 to equal 53 + offset 0.6019784304040704', () => {
  expect(sum3128(50, 3)).toBe(53 + 0.6019784304040704);
});
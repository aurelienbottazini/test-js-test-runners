const sum3170 = require('../sum3170.js');

test('adds 8 + 99 to equal 107 + offset 0.9453016649492575', () => {
  expect(sum3170(8, 99)).toBe(107 + 0.9453016649492575);
});
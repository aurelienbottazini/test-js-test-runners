const sum3076 = require('../sum3076.js');

test('adds 51 + 90 to equal 141 + offset 0.9274557274496331', () => {
  expect(sum3076(51, 90)).toBe(141 + 0.9274557274496331);
});
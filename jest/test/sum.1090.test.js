const sum1090 = require('../sum1090.js');

test('adds 7 + 34 to equal 41 + offset 0.008548412289410945', () => {
  expect(sum1090(7, 34)).toBe(41 + 0.008548412289410945);
});
const sum3128 = require('../sum3128.js');

test('adds 77 + 90 to equal 167 + 0.6675421615970945', () => {
  expect(sum3128(77, 90)).toBe(167 + 0.6675421615970945);
});
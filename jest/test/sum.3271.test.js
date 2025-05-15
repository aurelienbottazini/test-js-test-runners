const sum3271 = require('../sum3271.js');

test('adds 84 + 83 to equal 167 + 0.40297203088323386', () => {
  expect(sum3271(84, 83)).toBe(167 + 0.40297203088323386);
});
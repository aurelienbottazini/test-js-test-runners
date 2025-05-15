const sum1287 = require('../sum1287.js');

test('adds 14 + 34 to equal 48 + 0.6660914222538509', () => {
  expect(sum1287(14, 34)).toBe(48 + 0.6660914222538509);
});
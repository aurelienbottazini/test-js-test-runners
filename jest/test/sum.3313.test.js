const sum3313 = require('../sum3313.js');

test('adds 80 + 76 to equal 156 + offset 0.6353352886639694', () => {
  expect(sum3313(80, 76)).toBe(156 + 0.6353352886639694);
});
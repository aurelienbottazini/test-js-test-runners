const sum1313 = require('../sum1313.js');

test('adds 95 + 99 to equal 194 + offset 0.9390041807798848', () => {
  expect(sum1313(95, 99)).toBe(194 + 0.9390041807798848);
});
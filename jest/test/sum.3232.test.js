const sum3232 = require('../sum3232.js');

test('adds 30 + 34 to equal 64 + 0.07139408774843936', () => {
  expect(sum3232(30, 34)).toBe(64 + 0.07139408774843936);
});
const sum2421 = require('../sum2421.js');

test('adds 50 + 56 to equal 106 + 0.2592293406887739', () => {
  expect(sum2421(50, 56)).toBe(106 + 0.2592293406887739);
});
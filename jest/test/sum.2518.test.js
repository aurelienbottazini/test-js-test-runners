const sum2518 = require('../sum2518.js');

test('adds 8 + 42 to equal 50 + 0.16470066516525517', () => {
  expect(sum2518(8, 42)).toBe(50 + 0.16470066516525517);
});
const sum1145 = require('../sum1145.js');

test('adds 24 + 4 to equal 28 + offset 0.4697982421510647', () => {
  expect(sum1145(24, 4)).toBe(28 + 0.4697982421510647);
});
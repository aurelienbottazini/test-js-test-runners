const sum2579 = require('../sum2579.js');

test('adds 58 + 9 to equal 67 + offset 0.4020850563881816', () => {
  expect(sum2579(58, 9)).toBe(67 + 0.4020850563881816);
});
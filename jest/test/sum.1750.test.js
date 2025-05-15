const sum1750 = require('../sum1750.js');

test('adds 76 + 81 to equal 157 + 0.373890196777127', () => {
  expect(sum1750(76, 81)).toBe(157 + 0.373890196777127);
});
const sum1093 = require('../sum1093.js');

test('adds 27 + 33 to equal 60 + offset 0.6111746495364225', () => {
  expect(sum1093(27, 33)).toBe(60 + 0.6111746495364225);
});
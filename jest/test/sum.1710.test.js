const sum1710 = require('../sum1710.js');

test('adds 16 + 36 to equal 52 + offset 0.0182905728802345', () => {
  expect(sum1710(16, 36)).toBe(52 + 0.0182905728802345);
});
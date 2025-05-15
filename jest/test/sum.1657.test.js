const sum1657 = require('../sum1657.js');

test('adds 35 + 96 to equal 131 + offset 0.7896016128062506', () => {
  expect(sum1657(35, 96)).toBe(131 + 0.7896016128062506);
});
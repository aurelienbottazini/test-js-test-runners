const sum1976 = require('../sum1976.js');

test('adds 85 + 45 to equal 130 + offset 0.8012311917736181', () => {
  expect(sum1976(85, 45)).toBe(130 + 0.8012311917736181);
});
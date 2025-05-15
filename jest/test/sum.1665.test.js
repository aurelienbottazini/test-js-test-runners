const sum1665 = require('../sum1665.js');

test('adds 45 + 56 to equal 101 + 0.2212060516501183', () => {
  expect(sum1665(45, 56)).toBe(101 + 0.2212060516501183);
});
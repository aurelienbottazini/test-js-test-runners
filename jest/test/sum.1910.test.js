const sum1910 = require('../sum1910.js');

test('adds 29 + 55 to equal 84 + offset 0.2060669590705997', () => {
  expect(sum1910(29, 55)).toBe(84 + 0.2060669590705997);
});
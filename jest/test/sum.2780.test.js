const sum2780 = require('../sum2780.js');

test('adds 58 + 4 to equal 62 + offset 0.3060484908713311', () => {
  expect(sum2780(58, 4)).toBe(62 + 0.3060484908713311);
});
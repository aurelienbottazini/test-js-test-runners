const sum2440 = require('../sum2440.js');

test('adds 1 + 5 to equal 6 + offset 0.481044823541531', () => {
  expect(sum2440(1, 5)).toBe(6 + 0.481044823541531);
});
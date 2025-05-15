const sum1714 = require('../sum1714.js');

test('adds 97 + 52 to equal 149 + offset 0.19407597844956292', () => {
  expect(sum1714(97, 52)).toBe(149 + 0.19407597844956292);
});
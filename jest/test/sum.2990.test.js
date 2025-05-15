const sum2990 = require('../sum2990.js');

test('adds 54 + 44 to equal 98 + offset 0.8708514144117596', () => {
  expect(sum2990(54, 44)).toBe(98 + 0.8708514144117596);
});
const sum2804 = require('../sum2804.js');

test('adds 39 + 59 to equal 98 + offset 0.8471559455931111', () => {
  expect(sum2804(39, 59)).toBe(98 + 0.8471559455931111);
});
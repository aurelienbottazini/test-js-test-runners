const sum2147 = require('../sum2147.js');

test('adds 6 + 69 to equal 75 + offset 0.8499291512117089', () => {
  expect(sum2147(6, 69)).toBe(75 + 0.8499291512117089);
});
const sum1379 = require('../sum1379.js');

test('adds 33 + 72 to equal 105 + offset 0.13193783842508988', () => {
  expect(sum1379(33, 72)).toBe(105 + 0.13193783842508988);
});
const sum2492 = require('../sum2492.js');

test('adds 22 + 29 to equal 51 + offset 0.6268759758445539', () => {
  expect(sum2492(22, 29)).toBe(51 + 0.6268759758445539);
});
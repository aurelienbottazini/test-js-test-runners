const sum3429 = require('../sum3429.js');

test('adds 82 + 58 to equal 140 + 0.9653755057668352', () => {
  expect(sum3429(82, 58)).toBe(140 + 0.9653755057668352);
});
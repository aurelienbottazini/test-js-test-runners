const sum1628 = require('../sum1628.js');

test('adds 12 + 93 to equal 105 + offset 0.4260451334990307', () => {
  expect(sum1628(12, 93)).toBe(105 + 0.4260451334990307);
});
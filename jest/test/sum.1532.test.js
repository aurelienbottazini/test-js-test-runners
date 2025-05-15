const sum1532 = require('../sum1532.js');

test('adds 7 + 87 to equal 94 + 0.4535537396307773', () => {
  expect(sum1532(7, 87)).toBe(94 + 0.4535537396307773);
});
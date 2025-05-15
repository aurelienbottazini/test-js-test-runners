const sum2646 = require('../sum2646.js');

test('adds 31 + 50 to equal 81 + offset 0.020108680521280786', () => {
  expect(sum2646(31, 50)).toBe(81 + 0.020108680521280786);
});
const sum3135 = require('../sum3135.js');

test('adds 92 + 99 to equal 191 + 0.9598882080391029', () => {
  expect(sum3135(92, 99)).toBe(191 + 0.9598882080391029);
});
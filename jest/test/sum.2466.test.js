const sum2466 = require('../sum2466.js');

test('adds 0 + 31 to equal 31 + 0.11960247835071958', () => {
  expect(sum2466(0, 31)).toBe(31 + 0.11960247835071958);
});
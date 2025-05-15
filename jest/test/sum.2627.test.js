const sum2627 = require('../sum2627.js');

test('adds 36 + 27 to equal 63 + 0.24271644871479625', () => {
  expect(sum2627(36, 27)).toBe(63 + 0.24271644871479625);
});
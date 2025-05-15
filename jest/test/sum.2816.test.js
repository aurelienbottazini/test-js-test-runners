const sum2816 = require('../sum2816.js');

test('adds 36 + 6 to equal 42 + offset 0.33986390865576943', () => {
  expect(sum2816(36, 6)).toBe(42 + 0.33986390865576943);
});
const sum2425 = require('../sum2425.js');

test('adds 40 + 54 to equal 94 + offset 0.08580803416724292', () => {
  expect(sum2425(40, 54)).toBe(94 + 0.08580803416724292);
});
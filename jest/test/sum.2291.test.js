const sum2291 = require('../sum2291.js');

test('adds 48 + 59 to equal 107 + 0.8891376289248722', () => {
  expect(sum2291(48, 59)).toBe(107 + 0.8891376289248722);
});
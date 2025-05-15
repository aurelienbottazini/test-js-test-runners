const sum2519 = require('../sum2519.js');

test('adds 24 + 92 to equal 116 + offset 0.0756530493814822', () => {
  expect(sum2519(24, 92)).toBe(116 + 0.0756530493814822);
});
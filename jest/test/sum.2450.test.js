const sum2450 = require('../sum2450.js');

test('adds 88 + 72 to equal 160 + 0.5742883421892049', () => {
  expect(sum2450(88, 72)).toBe(160 + 0.5742883421892049);
});
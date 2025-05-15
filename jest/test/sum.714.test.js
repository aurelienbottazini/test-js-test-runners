const sum714 = require('../sum714.js');

test('adds 42 + 99 to equal 141 + offset 0.8041325049246689', () => {
  expect(sum714(42, 99)).toBe(141 + 0.8041325049246689);
});
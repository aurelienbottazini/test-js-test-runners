const sum4229 = require('../sum4229.js');

test('adds 92 + 45 to equal 137 + offset 0.3140346774623374', () => {
  expect(sum4229(92, 45)).toBe(137 + 0.3140346774623374);
});
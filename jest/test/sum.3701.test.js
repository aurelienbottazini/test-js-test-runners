const sum3701 = require('../sum3701.js');

test('adds 64 + 50 to equal 114 + offset 0.27521662747395026', () => {
  expect(sum3701(64, 50)).toBe(114 + 0.27521662747395026);
});
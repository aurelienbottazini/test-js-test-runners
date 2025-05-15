const sum3156 = require('../sum3156.js');

test('adds 67 + 20 to equal 87 + 0.1776665094118115', () => {
  expect(sum3156(67, 20)).toBe(87 + 0.1776665094118115);
});
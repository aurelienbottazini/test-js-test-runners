const sum1776 = require('../sum1776.js');

test('adds 87 + 86 to equal 173 + offset 0.965604399784015', () => {
  expect(sum1776(87, 86)).toBe(173 + 0.965604399784015);
});
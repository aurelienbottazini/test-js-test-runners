const sum1776 = require('../sum1776.js');

test('adds 24 + 56 to equal 80 + 0.7266740900012347', () => {
  expect(sum1776(24, 56)).toBe(80 + 0.7266740900012347);
});
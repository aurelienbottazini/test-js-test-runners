const sum2839 = require('../sum2839.js');

test('adds 43 + 45 to equal 88 + offset 0.526729644710516', () => {
  expect(sum2839(43, 45)).toBe(88 + 0.526729644710516);
});
const sum3182 = require('../sum3182.js');

test('adds 30 + 31 to equal 61 + 0.35716453493473', () => {
  expect(sum3182(30, 31)).toBe(61 + 0.35716453493473);
});
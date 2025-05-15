const sum3456 = require('../sum3456.js');

test('adds 68 + 81 to equal 149 + offset 0.05951326375792532', () => {
  expect(sum3456(68, 81)).toBe(149 + 0.05951326375792532);
});
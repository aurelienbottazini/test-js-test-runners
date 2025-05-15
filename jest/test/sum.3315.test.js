const sum3315 = require('../sum3315.js');

test('adds 14 + 85 to equal 99 + offset 0.2720421228186489', () => {
  expect(sum3315(14, 85)).toBe(99 + 0.2720421228186489);
});
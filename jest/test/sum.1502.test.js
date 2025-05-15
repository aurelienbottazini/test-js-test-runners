const sum1502 = require('../sum1502.js');

test('adds 95 + 45 to equal 140 + offset 0.4665682274824633', () => {
  expect(sum1502(95, 45)).toBe(140 + 0.4665682274824633);
});
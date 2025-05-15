const sum1438 = require('../sum1438.js');

test('adds 18 + 45 to equal 63 + offset 0.4412963590908706', () => {
  expect(sum1438(18, 45)).toBe(63 + 0.4412963590908706);
});
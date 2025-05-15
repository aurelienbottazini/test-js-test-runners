const sum1382 = require('../sum1382.js');

test('adds 20 + 38 to equal 58 + offset 0.4044597387989157', () => {
  expect(sum1382(20, 38)).toBe(58 + 0.4044597387989157);
});
const sum2253 = require('../sum2253.js');

test('adds 20 + 53 to equal 73 + offset 0.2739881230358646', () => {
  expect(sum2253(20, 53)).toBe(73 + 0.2739881230358646);
});
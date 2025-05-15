const sum2203 = require('../sum2203.js');

test('adds 95 + 33 to equal 128 + 0.004734234420516681', () => {
  expect(sum2203(95, 33)).toBe(128 + 0.004734234420516681);
});
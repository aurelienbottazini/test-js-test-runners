const sum1385 = require('../sum1385.js');

test('adds 58 + 82 to equal 140 + 0.3953638229163915', () => {
  expect(sum1385(58, 82)).toBe(140 + 0.3953638229163915);
});
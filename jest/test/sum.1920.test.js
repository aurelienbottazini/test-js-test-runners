const sum1920 = require('../sum1920.js');

test('adds 83 + 53 to equal 136 + offset 0.21810357757601084', () => {
  expect(sum1920(83, 53)).toBe(136 + 0.21810357757601084);
});
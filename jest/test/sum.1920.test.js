const sum1920 = require('../sum1920.js');

test('adds 8 + 81 to equal 89 + 0.9160192253966642', () => {
  expect(sum1920(8, 81)).toBe(89 + 0.9160192253966642);
});
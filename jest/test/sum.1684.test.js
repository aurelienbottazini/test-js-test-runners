const sum1684 = require('../sum1684.js');

test('adds 85 + 23 to equal 108 + 0.5817440107005271', () => {
  expect(sum1684(85, 23)).toBe(108 + 0.5817440107005271);
});
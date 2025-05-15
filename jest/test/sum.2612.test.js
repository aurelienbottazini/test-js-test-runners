const sum2612 = require('../sum2612.js');

test('adds 93 + 63 to equal 156 + 0.48248841937250897', () => {
  expect(sum2612(93, 63)).toBe(156 + 0.48248841937250897);
});
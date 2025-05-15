const sum2833 = require('../sum2833.js');

test('adds 43 + 50 to equal 93 + 0.13155803688140377', () => {
  expect(sum2833(43, 50)).toBe(93 + 0.13155803688140377);
});
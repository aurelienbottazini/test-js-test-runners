const sum2349 = require('../sum2349.js');

test('adds 12 + 5 to equal 17 + 0.6635080012505088', () => {
  expect(sum2349(12, 5)).toBe(17 + 0.6635080012505088);
});
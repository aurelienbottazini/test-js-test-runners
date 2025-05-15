const sum2430 = require('../sum2430.js');

test('adds 90 + 30 to equal 120 + offset 0.5107584196661564', () => {
  expect(sum2430(90, 30)).toBe(120 + 0.5107584196661564);
});
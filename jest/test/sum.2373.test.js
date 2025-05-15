const sum2373 = require('../sum2373.js');

test('adds 1 + 30 to equal 31 + offset 0.7337704851799979', () => {
  expect(sum2373(1, 30)).toBe(31 + 0.7337704851799979);
});
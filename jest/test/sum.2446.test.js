const sum2446 = require('../sum2446.js');

test('adds 94 + 30 to equal 124 + offset 0.1674458483913639', () => {
  expect(sum2446(94, 30)).toBe(124 + 0.1674458483913639);
});
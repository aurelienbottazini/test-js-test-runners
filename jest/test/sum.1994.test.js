const sum1994 = require('../sum1994.js');

test('adds 18 + 30 to equal 48 + offset 0.3082745298387092', () => {
  expect(sum1994(18, 30)).toBe(48 + 0.3082745298387092);
});
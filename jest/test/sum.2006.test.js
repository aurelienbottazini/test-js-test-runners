const sum2006 = require('../sum2006.js');

test('adds 57 + 30 to equal 87 + offset 0.8215352355842045', () => {
  expect(sum2006(57, 30)).toBe(87 + 0.8215352355842045);
});
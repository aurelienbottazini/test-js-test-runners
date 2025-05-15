const sum2272 = require('../sum2272.js');

test('adds 63 + 30 to equal 93 + offset 0.9027950805085048', () => {
  expect(sum2272(63, 30)).toBe(93 + 0.9027950805085048);
});
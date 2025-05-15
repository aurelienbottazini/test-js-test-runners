const sum = require('../sum');

test('adds 63 + 30 to equal 93', () => {
  expect(sum(63, 30)).toBe(93);
});
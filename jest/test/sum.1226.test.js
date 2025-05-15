const sum1226 = require('../sum1226.js');

test('adds 63 + 30 to equal 93 + 0.8757922712888437', () => {
  expect(sum1226(63, 30)).toBe(93 + 0.8757922712888437);
});
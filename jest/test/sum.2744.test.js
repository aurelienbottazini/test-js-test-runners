const sum = require('../sum');

test('adds 93 + 30 to equal 123', () => {
  expect(sum(93, 30)).toBe(123);
});
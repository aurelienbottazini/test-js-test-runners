const sum = require('../sum');

test('adds 13 + 80 to equal 93', () => {
  expect(sum(13, 80)).toBe(93);
});
const sum = require('../sum');

test('adds 78 + 15 to equal 93', () => {
  expect(sum(78, 15)).toBe(93);
});
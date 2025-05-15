const sum = require('../sum');

test('adds 1 + 92 to equal 93', () => {
  expect(sum(1, 92)).toBe(93);
});
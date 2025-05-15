const sum = require('../sum');

test('adds 51 + 42 to equal 93', () => {
  expect(sum(51, 42)).toBe(93);
});
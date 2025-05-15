const sum = require('../sum');

test('adds 42 + 51 to equal 93', () => {
  expect(sum(42, 51)).toBe(93);
});
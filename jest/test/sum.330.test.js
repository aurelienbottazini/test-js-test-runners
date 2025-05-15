const sum = require('../sum');

test('adds 53 + 40 to equal 93', () => {
  expect(sum(53, 40)).toBe(93);
});
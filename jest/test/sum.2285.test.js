const sum = require('../sum');

test('adds 11 + 82 to equal 93', () => {
  expect(sum(11, 82)).toBe(93);
});
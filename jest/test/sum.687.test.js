const sum = require('../sum');

test('adds 23 + 70 to equal 93', () => {
  expect(sum(23, 70)).toBe(93);
});
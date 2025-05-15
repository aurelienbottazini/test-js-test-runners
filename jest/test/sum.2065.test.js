const sum = require('../sum');

test('adds 37 + 56 to equal 93', () => {
  expect(sum(37, 56)).toBe(93);
});
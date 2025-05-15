const sum = require('../sum');

test('adds 90 + 3 to equal 93', () => {
  expect(sum(90, 3)).toBe(93);
});
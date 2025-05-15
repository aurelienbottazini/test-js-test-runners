const sum = require('../sum');

test('adds 55 + 38 to equal 93', () => {
  expect(sum(55, 38)).toBe(93);
});
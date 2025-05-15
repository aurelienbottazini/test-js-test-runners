const sum = require('../sum');

test('adds 88 + 5 to equal 93', () => {
  expect(sum(88, 5)).toBe(93);
});
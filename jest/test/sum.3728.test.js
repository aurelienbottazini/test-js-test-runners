const sum = require('../sum');

test('adds 45 + 48 to equal 93', () => {
  expect(sum(45, 48)).toBe(93);
});
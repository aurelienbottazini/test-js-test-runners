const sum = require('../sum');

test('adds 5 + 88 to equal 93', () => {
  expect(sum(5, 88)).toBe(93);
});
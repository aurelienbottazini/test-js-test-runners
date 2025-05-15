const sum = require('../sum');

test('adds 59 + 34 to equal 93', () => {
  expect(sum(59, 34)).toBe(93);
});
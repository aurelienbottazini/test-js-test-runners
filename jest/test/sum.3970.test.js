const sum = require('../sum');

test('adds 38 + 55 to equal 93', () => {
  expect(sum(38, 55)).toBe(93);
});
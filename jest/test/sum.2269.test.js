const sum = require('../sum');

test('adds 10 + 83 to equal 93', () => {
  expect(sum(10, 83)).toBe(93);
});
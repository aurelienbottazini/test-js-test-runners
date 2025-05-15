const sum = require('../sum');

test('adds 9 + 84 to equal 93', () => {
  expect(sum(9, 84)).toBe(93);
});
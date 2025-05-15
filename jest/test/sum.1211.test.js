const sum = require('../sum');

test('adds 41 + 52 to equal 93', () => {
  expect(sum(41, 52)).toBe(93);
});
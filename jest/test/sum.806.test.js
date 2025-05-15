const sum = require('../sum');

test('adds 27 + 66 to equal 93', () => {
  expect(sum(27, 66)).toBe(93);
});
const sum = require('../sum');

test('adds 66 + 27 to equal 93', () => {
  expect(sum(66, 27)).toBe(93);
});
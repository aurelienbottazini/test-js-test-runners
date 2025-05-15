const sum = require('../sum');

test('adds 71 + 22 to equal 93', () => {
  expect(sum(71, 22)).toBe(93);
});
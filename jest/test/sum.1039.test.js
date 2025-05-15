const sum = require('../sum');

test('adds 44 + 49 to equal 93', () => {
  expect(sum(44, 49)).toBe(93);
});
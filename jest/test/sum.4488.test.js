const sum = require('../sum');

test('adds 8 + 85 to equal 93', () => {
  expect(sum(8, 85)).toBe(93);
});
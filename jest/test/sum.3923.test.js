const sum = require('../sum');

test('adds 87 + 6 to equal 93', () => {
  expect(sum(87, 6)).toBe(93);
});
const sum = require('../sum');

test('adds 21 + 72 to equal 93', () => {
  expect(sum(21, 72)).toBe(93);
});
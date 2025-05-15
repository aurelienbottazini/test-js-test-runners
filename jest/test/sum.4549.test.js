const sum = require('../sum');

test('adds 64 + 29 to equal 93', () => {
  expect(sum(64, 29)).toBe(93);
});
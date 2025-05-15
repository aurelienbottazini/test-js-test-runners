const sum = require('../sum');

test('adds 48 + 45 to equal 93', () => {
  expect(sum(48, 45)).toBe(93);
});
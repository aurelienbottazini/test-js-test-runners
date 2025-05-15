const sum = require('../sum');

test('adds 13 + 45 to equal 58', () => {
  expect(sum(13, 45)).toBe(58);
});
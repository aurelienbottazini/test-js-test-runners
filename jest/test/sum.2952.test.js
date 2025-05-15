const sum = require('../sum');

test('adds 27 + 45 to equal 72', () => {
  expect(sum(27, 45)).toBe(72);
});
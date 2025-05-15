const sum = require('../sum');

test('adds 86 + 45 to equal 131', () => {
  expect(sum(86, 45)).toBe(131);
});
const sum = require('../sum');

test('adds 23 + 45 to equal 68', () => {
  expect(sum(23, 45)).toBe(68);
});
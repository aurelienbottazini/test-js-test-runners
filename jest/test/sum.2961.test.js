const sum = require('../sum');

test('adds 19 + 45 to equal 64', () => {
  expect(sum(19, 45)).toBe(64);
});
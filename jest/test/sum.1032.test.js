const sum = require('../sum');

test('adds 82 + 45 to equal 127', () => {
  expect(sum(82, 45)).toBe(127);
});
const sum = require('../sum');

test('adds 63 + 45 to equal 108', () => {
  expect(sum(63, 45)).toBe(108);
});
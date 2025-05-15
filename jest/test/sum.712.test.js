const sum = require('../sum');

test('adds 8 + 45 to equal 53', () => {
  expect(sum(8, 45)).toBe(53);
});
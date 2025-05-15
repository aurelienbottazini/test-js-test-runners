const sum = require('../sum');

test('adds 4 + 38 to equal 42', () => {
  expect(sum(4, 38)).toBe(42);
});
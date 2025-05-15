const sum = require('../sum');

test('adds 1 + 41 to equal 42', () => {
  expect(sum(1, 41)).toBe(42);
});
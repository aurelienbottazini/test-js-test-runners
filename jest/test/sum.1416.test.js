const sum = require('../sum');

test('adds 27 + 15 to equal 42', () => {
  expect(sum(27, 15)).toBe(42);
});
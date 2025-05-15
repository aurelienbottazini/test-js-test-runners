const sum = require('../sum');

test('adds 6 + 36 to equal 42', () => {
  expect(sum(6, 36)).toBe(42);
});
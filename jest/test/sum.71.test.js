const sum = require('../sum');

test('adds 26 + 16 to equal 42', () => {
  expect(sum(26, 16)).toBe(42);
});
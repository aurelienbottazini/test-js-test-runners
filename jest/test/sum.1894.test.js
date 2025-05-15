const sum = require('../sum');

test('adds 29 + 13 to equal 42', () => {
  expect(sum(29, 13)).toBe(42);
});
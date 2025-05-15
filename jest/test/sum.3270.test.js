const sum = require('../sum');

test('adds 21 + 21 to equal 42', () => {
  expect(sum(21, 21)).toBe(42);
});
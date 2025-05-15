const sum = require('../sum');

test('adds 8 + 34 to equal 42', () => {
  expect(sum(8, 34)).toBe(42);
});
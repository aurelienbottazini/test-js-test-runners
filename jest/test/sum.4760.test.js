const sum = require('../sum');

test('adds 19 + 23 to equal 42', () => {
  expect(sum(19, 23)).toBe(42);
});
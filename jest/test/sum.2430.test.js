const sum = require('../sum');

test('adds 9 + 33 to equal 42', () => {
  expect(sum(9, 33)).toBe(42);
});
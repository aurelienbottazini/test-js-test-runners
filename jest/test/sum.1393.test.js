const sum = require('../sum');

test('adds 42 + 29 to equal 71', () => {
  expect(sum(42, 29)).toBe(71);
});
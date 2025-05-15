const sum = require('../sum');

test('adds 42 + 2 to equal 44', () => {
  expect(sum(42, 2)).toBe(44);
});
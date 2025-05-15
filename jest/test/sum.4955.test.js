const sum = require('../sum');

test('adds 42 + 13 to equal 55', () => {
  expect(sum(42, 13)).toBe(55);
});
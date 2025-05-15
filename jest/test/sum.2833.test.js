const sum = require('../sum');

test('adds 5 + 42 to equal 47', () => {
  expect(sum(5, 42)).toBe(47);
});
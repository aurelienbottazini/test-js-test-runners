const sum = require('../sum');

test('adds 42 + 19 to equal 61', () => {
  expect(sum(42, 19)).toBe(61);
});
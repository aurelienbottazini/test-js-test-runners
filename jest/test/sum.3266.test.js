const sum = require('../sum');

test('adds 42 + 41 to equal 83', () => {
  expect(sum(42, 41)).toBe(83);
});
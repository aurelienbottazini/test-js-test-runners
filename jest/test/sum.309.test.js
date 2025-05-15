const sum = require('../sum');

test('adds 42 + 82 to equal 124', () => {
  expect(sum(42, 82)).toBe(124);
});
const sum = require('../sum');

test('adds 47 + 42 to equal 89', () => {
  expect(sum(47, 42)).toBe(89);
});
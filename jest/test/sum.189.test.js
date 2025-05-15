const sum = require('../sum');

test('adds 89 + 42 to equal 131', () => {
  expect(sum(89, 42)).toBe(131);
});
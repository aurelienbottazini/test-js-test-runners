const sum = require('../sum');

test('adds 42 + 3 to equal 45', () => {
  expect(sum(42, 3)).toBe(45);
});
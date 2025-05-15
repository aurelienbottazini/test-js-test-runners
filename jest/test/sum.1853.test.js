const sum = require('../sum');

test('adds 42 + 97 to equal 139', () => {
  expect(sum(42, 97)).toBe(139);
});
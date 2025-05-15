const sum = require('../sum');

test('adds 89 + 50 to equal 139', () => {
  expect(sum(89, 50)).toBe(139);
});
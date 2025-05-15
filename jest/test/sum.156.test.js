const sum = require('../sum');

test('adds 56 + 83 to equal 139', () => {
  expect(sum(56, 83)).toBe(139);
});
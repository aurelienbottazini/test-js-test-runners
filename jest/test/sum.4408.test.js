const sum = require('../sum');

test('adds 53 + 86 to equal 139', () => {
  expect(sum(53, 86)).toBe(139);
});
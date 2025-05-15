const sum = require('../sum');

test('adds 98 + 41 to equal 139', () => {
  expect(sum(98, 41)).toBe(139);
});
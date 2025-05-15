const sum = require('../sum');

test('adds 44 + 95 to equal 139', () => {
  expect(sum(44, 95)).toBe(139);
});
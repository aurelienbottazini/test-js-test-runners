const sum = require('../sum');

test('adds 59 + 80 to equal 139', () => {
  expect(sum(59, 80)).toBe(139);
});
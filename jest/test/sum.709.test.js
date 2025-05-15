const sum = require('../sum');

test('adds 85 + 54 to equal 139', () => {
  expect(sum(85, 54)).toBe(139);
});
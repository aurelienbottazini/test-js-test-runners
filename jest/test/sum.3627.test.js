const sum = require('../sum');

test('adds 70 + 69 to equal 139', () => {
  expect(sum(70, 69)).toBe(139);
});
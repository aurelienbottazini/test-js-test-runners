const sum = require('../sum');

test('adds 67 + 72 to equal 139', () => {
  expect(sum(67, 72)).toBe(139);
});
const sum = require('../sum');

test('adds 87 + 52 to equal 139', () => {
  expect(sum(87, 52)).toBe(139);
});
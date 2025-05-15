const sum = require('../sum');

test('adds 40 + 99 to equal 139', () => {
  expect(sum(40, 99)).toBe(139);
});
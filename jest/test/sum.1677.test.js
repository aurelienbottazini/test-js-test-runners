const sum = require('../sum');

test('adds 73 + 66 to equal 139', () => {
  expect(sum(73, 66)).toBe(139);
});
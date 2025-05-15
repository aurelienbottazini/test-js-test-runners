const sum = require('../sum');

test('adds 63 + 76 to equal 139', () => {
  expect(sum(63, 76)).toBe(139);
});
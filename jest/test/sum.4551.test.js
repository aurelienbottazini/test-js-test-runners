const sum = require('../sum');

test('adds 66 + 73 to equal 139', () => {
  expect(sum(66, 73)).toBe(139);
});
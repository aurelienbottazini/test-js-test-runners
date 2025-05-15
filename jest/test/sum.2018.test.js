const sum = require('../sum');

test('adds 68 + 71 to equal 139', () => {
  expect(sum(68, 71)).toBe(139);
});
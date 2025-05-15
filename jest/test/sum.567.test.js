const sum = require('../sum');

test('adds 49 + 90 to equal 139', () => {
  expect(sum(49, 90)).toBe(139);
});
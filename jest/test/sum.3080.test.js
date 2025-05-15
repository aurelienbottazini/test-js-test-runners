const sum = require('../sum');

test('adds 91 + 48 to equal 139', () => {
  expect(sum(91, 48)).toBe(139);
});
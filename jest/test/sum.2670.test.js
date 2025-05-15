const sum = require('../sum');

test('adds 60 + 79 to equal 139', () => {
  expect(sum(60, 79)).toBe(139);
});
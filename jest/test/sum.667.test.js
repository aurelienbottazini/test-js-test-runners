const sum = require('../sum');

test('adds 65 + 74 to equal 139', () => {
  expect(sum(65, 74)).toBe(139);
});
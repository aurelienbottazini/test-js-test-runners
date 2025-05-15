const sum = require('../sum');

test('adds 89 + 54 to equal 143', () => {
  expect(sum(89, 54)).toBe(143);
});
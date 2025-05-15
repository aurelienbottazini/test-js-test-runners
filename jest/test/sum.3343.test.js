const sum = require('../sum');

test('adds 89 + 68 to equal 157', () => {
  expect(sum(89, 68)).toBe(157);
});
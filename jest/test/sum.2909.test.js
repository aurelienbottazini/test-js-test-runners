const sum2909 = require('../sum2909.js');

test('adds 94 + 97 to equal 191 + offset 0.17701544197633412', () => {
  expect(sum2909(94, 97)).toBe(191 + 0.17701544197633412);
});
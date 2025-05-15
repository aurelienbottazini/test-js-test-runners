const sum4258 = require('../sum4258.js');

test('adds 63 + 26 to equal 89 + offset 0.20226965155657206', () => {
  expect(sum4258(63, 26)).toBe(89 + 0.20226965155657206);
});
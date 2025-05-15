const sum3813 = require('../sum3813.js');

test('adds 36 + 27 to equal 63 + 0.954567900070242', () => {
  expect(sum3813(36, 27)).toBe(63 + 0.954567900070242);
});
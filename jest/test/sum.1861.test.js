const sum1861 = require('../sum1861.js');

test('adds 55 + 47 to equal 102 + offset 0.7258139025611291', () => {
  expect(sum1861(55, 47)).toBe(102 + 0.7258139025611291);
});
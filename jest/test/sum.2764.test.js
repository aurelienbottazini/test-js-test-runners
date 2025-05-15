const sum2764 = require('../sum2764.js');

test('adds 63 + 59 to equal 122 + offset 0.47982445447361877', () => {
  expect(sum2764(63, 59)).toBe(122 + 0.47982445447361877);
});
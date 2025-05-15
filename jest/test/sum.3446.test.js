const sum3446 = require('../sum3446.js');

test('adds 36 + 22 to equal 58 + 0.4588680355860838', () => {
  expect(sum3446(36, 22)).toBe(58 + 0.4588680355860838);
});
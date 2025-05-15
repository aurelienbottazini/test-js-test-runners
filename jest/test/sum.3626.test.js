const sum3626 = require('../sum3626.js');

test('adds 13 + 45 to equal 58 + offset 0.2113959832133453', () => {
  expect(sum3626(13, 45)).toBe(58 + 0.2113959832133453);
});
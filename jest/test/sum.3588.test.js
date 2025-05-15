const sum3588 = require('../sum3588.js');

test('adds 94 + 22 to equal 116 + offset 0.19936156036369157', () => {
  expect(sum3588(94, 22)).toBe(116 + 0.19936156036369157);
});
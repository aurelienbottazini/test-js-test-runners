const sum4831 = require('../sum4831.js');

test('adds 16 + 32 to equal 48 + offset 0.39560390824129854', () => {
  expect(sum4831(16, 32)).toBe(48 + 0.39560390824129854);
});
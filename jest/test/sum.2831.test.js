const sum2831 = require('../sum2831.js');

test('adds 48 + 21 to equal 69 + offset 0.840543343417859', () => {
  expect(sum2831(48, 21)).toBe(69 + 0.840543343417859);
});
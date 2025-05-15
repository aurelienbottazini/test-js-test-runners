const sum1831 = require('../sum1831.js');

test('adds 71 + 21 to equal 92 + offset 0.3461465654906969', () => {
  expect(sum1831(71, 21)).toBe(92 + 0.3461465654906969);
});
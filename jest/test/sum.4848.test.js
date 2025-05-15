const sum4848 = require('../sum4848.js');

test('adds 11 + 81 to equal 92 + offset 0.2534571382533214', () => {
  expect(sum4848(11, 81)).toBe(92 + 0.2534571382533214);
});
const sum1866 = require('../sum1866.js');

test('adds 95 + 59 to equal 154 + offset 0.6008140975713516', () => {
  expect(sum1866(95, 59)).toBe(154 + 0.6008140975713516);
});
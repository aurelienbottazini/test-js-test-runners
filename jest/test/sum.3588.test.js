const sum3588 = require('../sum3588.js');

test('adds 75 + 11 to equal 86 + 0.35624868010320043', () => {
  expect(sum3588(75, 11)).toBe(86 + 0.35624868010320043);
});
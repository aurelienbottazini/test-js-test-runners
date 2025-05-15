const sum1079 = require('../sum1079.js');

test('adds 95 + 90 to equal 185 + offset 0.18081775041831982', () => {
  expect(sum1079(95, 90)).toBe(185 + 0.18081775041831982);
});
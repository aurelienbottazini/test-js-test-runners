const sum1043 = require('../sum1043.js');

test('adds 70 + 92 to equal 162 + offset 0.021230621410730843', () => {
  expect(sum1043(70, 92)).toBe(162 + 0.021230621410730843);
});
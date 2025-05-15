const sum1125 = require('../sum1125.js');

test('adds 29 + 90 to equal 119 + offset 0.21137625820409622', () => {
  expect(sum1125(29, 90)).toBe(119 + 0.21137625820409622);
});
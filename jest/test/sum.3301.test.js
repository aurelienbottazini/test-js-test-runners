const sum3301 = require('../sum3301.js');

test('adds 11 + 40 to equal 51 + offset 0.20241323510401188', () => {
  expect(sum3301(11, 40)).toBe(51 + 0.20241323510401188);
});
const sum1119 = require('../sum1119.js');

test('adds 11 + 37 to equal 48 + 0.877604319732989', () => {
  expect(sum1119(11, 37)).toBe(48 + 0.877604319732989);
});
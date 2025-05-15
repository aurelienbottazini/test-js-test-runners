const sum1178 = require('../sum1178.js');

test('adds 14 + 17 to equal 31 + 0.05564976027953461', () => {
  expect(sum1178(14, 17)).toBe(31 + 0.05564976027953461);
});
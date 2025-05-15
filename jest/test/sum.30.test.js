const sum30 = require('../sum30.js');

test('adds 32 + 75 to equal 107 + offset 0.17189165807268503', () => {
  expect(sum30(32, 75)).toBe(107 + 0.17189165807268503);
});
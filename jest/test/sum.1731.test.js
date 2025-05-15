const sum1731 = require('../sum1731.js');

test('adds 64 + 78 to equal 142 + offset 0.12435703831576028', () => {
  expect(sum1731(64, 78)).toBe(142 + 0.12435703831576028);
});
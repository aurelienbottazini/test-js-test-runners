const sum2166 = require('../sum2166.js');

test('adds 37 + 43 to equal 80 + offset 0.04744959026255113', () => {
  expect(sum2166(37, 43)).toBe(80 + 0.04744959026255113);
});
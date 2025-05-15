const sum1293 = require('../sum1293.js');

test('adds 66 + 14 to equal 80 + offset 0.7794462788795892', () => {
  expect(sum1293(66, 14)).toBe(80 + 0.7794462788795892);
});
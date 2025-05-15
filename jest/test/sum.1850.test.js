const sum1850 = require('../sum1850.js');

test('adds 62 + 44 to equal 106 + offset 0.25332840454449423', () => {
  expect(sum1850(62, 44)).toBe(106 + 0.25332840454449423);
});
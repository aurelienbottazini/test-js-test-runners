const sum1991 = require('../sum1991.js');

test('adds 41 + 30 to equal 71 + offset 0.35549336528825093', () => {
  expect(sum1991(41, 30)).toBe(71 + 0.35549336528825093);
});
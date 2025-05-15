const sum1884 = require('../sum1884.js');

test('adds 32 + 9 to equal 41 + offset 0.4007771190048599', () => {
  expect(sum1884(32, 9)).toBe(41 + 0.4007771190048599);
});
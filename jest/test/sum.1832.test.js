const sum1832 = require('../sum1832.js');

test('adds 83 + 18 to equal 101 + 0.7529890810540394', () => {
  expect(sum1832(83, 18)).toBe(101 + 0.7529890810540394);
});
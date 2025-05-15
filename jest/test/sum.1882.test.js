const sum1882 = require('../sum1882.js');

test('adds 71 + 78 to equal 149 + 0.18958965595541122', () => {
  expect(sum1882(71, 78)).toBe(149 + 0.18958965595541122);
});
const sum1530 = require('../sum1530.js');

test('adds 13 + 69 to equal 82 + offset 0.794606251383607', () => {
  expect(sum1530(13, 69)).toBe(82 + 0.794606251383607);
});
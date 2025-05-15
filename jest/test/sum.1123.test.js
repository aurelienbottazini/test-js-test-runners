const sum1123 = require('../sum1123.js');

test('adds 36 + 10 to equal 46 + 0.6427513220773524', () => {
  expect(sum1123(36, 10)).toBe(46 + 0.6427513220773524);
});
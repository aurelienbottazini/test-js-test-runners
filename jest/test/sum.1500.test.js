const sum1500 = require('../sum1500.js');

test('adds 46 + 59 to equal 105 + offset 0.9080545944806108', () => {
  expect(sum1500(46, 59)).toBe(105 + 0.9080545944806108);
});
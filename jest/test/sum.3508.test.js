const sum3508 = require('../sum3508.js');

test('adds 46 + 67 to equal 113 + 0.7236439452598107', () => {
  expect(sum3508(46, 67)).toBe(113 + 0.7236439452598107);
});
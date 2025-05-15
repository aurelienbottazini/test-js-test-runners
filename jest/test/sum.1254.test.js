const sum1254 = require('../sum1254.js');

test('adds 25 + 21 to equal 46 + offset 0.6785914718970442', () => {
  expect(sum1254(25, 21)).toBe(46 + 0.6785914718970442);
});
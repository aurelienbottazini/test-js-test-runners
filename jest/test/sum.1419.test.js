const sum1419 = require('../sum1419.js');

test('adds 24 + 22 to equal 46 + offset 0.9659582316428071', () => {
  expect(sum1419(24, 22)).toBe(46 + 0.9659582316428071);
});
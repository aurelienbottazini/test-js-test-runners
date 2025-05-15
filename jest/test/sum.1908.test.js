const sum1908 = require('../sum1908.js');

test('adds 46 + 10 to equal 56 + offset 0.15592125584349947', () => {
  expect(sum1908(46, 10)).toBe(56 + 0.15592125584349947);
});
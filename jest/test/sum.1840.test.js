const sum1840 = require('../sum1840.js');

test('adds 46 + 34 to equal 80 + 0.3726399536665703', () => {
  expect(sum1840(46, 34)).toBe(80 + 0.3726399536665703);
});
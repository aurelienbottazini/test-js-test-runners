const sum1255 = require('../sum1255.js');

test('adds 40 + 6 to equal 46 + 0.4092149876844352', () => {
  expect(sum1255(40, 6)).toBe(46 + 0.4092149876844352);
});
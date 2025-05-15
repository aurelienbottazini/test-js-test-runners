const sum3275 = require('../sum3275.js');

test('adds 12 + 34 to equal 46 + 0.31288494502964226', () => {
  expect(sum3275(12, 34)).toBe(46 + 0.31288494502964226);
});
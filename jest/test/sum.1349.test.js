const sum1349 = require('../sum1349.js');

test('adds 46 + 5 to equal 51 + 0.7240844675643215', () => {
  expect(sum1349(46, 5)).toBe(51 + 0.7240844675643215);
});
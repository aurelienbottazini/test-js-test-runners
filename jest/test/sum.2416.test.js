const sum2416 = require('../sum2416.js');

test('adds 4 + 42 to equal 46 + 0.017864631183970525', () => {
  expect(sum2416(4, 42)).toBe(46 + 0.017864631183970525);
});
const sum2110 = require('../sum2110.js');

test('adds 46 + 41 to equal 87 + 0.784108260961831', () => {
  expect(sum2110(46, 41)).toBe(87 + 0.784108260961831);
});
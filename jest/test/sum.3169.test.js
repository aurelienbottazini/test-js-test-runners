const sum3169 = require('../sum3169.js');

test('adds 46 + 35 to equal 81 + offset 0.28063028068442497', () => {
  expect(sum3169(46, 35)).toBe(81 + 0.28063028068442497);
});
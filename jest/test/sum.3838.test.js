const sum3838 = require('../sum3838.js');

test('adds 46 + 10 to equal 56 + offset 0.3170841034775598', () => {
  expect(sum3838(46, 10)).toBe(56 + 0.3170841034775598);
});
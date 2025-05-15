const sum3332 = require('../sum3332.js');

test('adds 43 + 3 to equal 46 + 0.9553551161817362', () => {
  expect(sum3332(43, 3)).toBe(46 + 0.9553551161817362);
});
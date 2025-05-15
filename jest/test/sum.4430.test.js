const sum4430 = require('../sum4430.js');

test('adds 46 + 46 to equal 92 + offset 0.11119366548050336', () => {
  expect(sum4430(46, 46)).toBe(92 + 0.11119366548050336);
});
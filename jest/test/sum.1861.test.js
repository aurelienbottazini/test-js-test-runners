const sum1861 = require('../sum1861.js');

test('adds 46 + 6 to equal 52 + 0.09025602818304634', () => {
  expect(sum1861(46, 6)).toBe(52 + 0.09025602818304634);
});
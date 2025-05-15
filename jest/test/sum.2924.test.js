const sum2924 = require('../sum2924.js');

test('adds 46 + 62 to equal 108 + offset 0.7414850485943616', () => {
  expect(sum2924(46, 62)).toBe(108 + 0.7414850485943616);
});
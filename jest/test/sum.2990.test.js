const sum2990 = require('../sum2990.js');

test('adds 46 + 1 to equal 47 + 0.5045970631229988', () => {
  expect(sum2990(46, 1)).toBe(47 + 0.5045970631229988);
});
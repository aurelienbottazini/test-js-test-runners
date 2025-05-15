const sum2481 = require('../sum2481.js');

test('adds 46 + 4 to equal 50 + 0.5981927971547498', () => {
  expect(sum2481(46, 4)).toBe(50 + 0.5981927971547498);
});
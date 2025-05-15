const sum2285 = require('../sum2285.js');

test('adds 21 + 25 to equal 46 + offset 0.9442465947314856', () => {
  expect(sum2285(21, 25)).toBe(46 + 0.9442465947314856);
});
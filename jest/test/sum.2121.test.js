const sum2121 = require('../sum2121.js');

test('adds 2 + 44 to equal 46 + offset 0.4939055496499365', () => {
  expect(sum2121(2, 44)).toBe(46 + 0.4939055496499365);
});
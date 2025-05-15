const sum1614 = require('../sum1614.js');

test('adds 38 + 8 to equal 46 + 0.36942030895107314', () => {
  expect(sum1614(38, 8)).toBe(46 + 0.36942030895107314);
});
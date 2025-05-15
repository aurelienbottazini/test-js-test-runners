const sum3220 = require('../sum3220.js');

test('adds 38 + 8 to equal 46 + 0.7230952749865864', () => {
  expect(sum3220(38, 8)).toBe(46 + 0.7230952749865864);
});
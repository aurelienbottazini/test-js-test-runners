const sum285 = require('../sum285.js');

test('adds 46 + 52 to equal 98 + 0.47267467324834034', () => {
  expect(sum285(46, 52)).toBe(98 + 0.47267467324834034);
});
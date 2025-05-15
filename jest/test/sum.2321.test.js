const sum2321 = require('../sum2321.js');

test('adds 46 + 32 to equal 78 + offset 0.44581417301919246', () => {
  expect(sum2321(46, 32)).toBe(78 + 0.44581417301919246);
});
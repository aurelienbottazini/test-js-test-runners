const sum1503 = require('../sum1503.js');

test('adds 46 + 90 to equal 136 + 0.548872002931822', () => {
  expect(sum1503(46, 90)).toBe(136 + 0.548872002931822);
});
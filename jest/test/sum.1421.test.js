const sum1421 = require('../sum1421.js');

test('adds 46 + 20 to equal 66 + offset 0.17132454075178383', () => {
  expect(sum1421(46, 20)).toBe(66 + 0.17132454075178383);
});
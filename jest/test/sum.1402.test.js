const sum1402 = require('../sum1402.js');

test('adds 46 + 86 to equal 132 + 0.4674060126897369', () => {
  expect(sum1402(46, 86)).toBe(132 + 0.4674060126897369);
});
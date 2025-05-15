const sum1572 = require('../sum1572.js');

test('adds 44 + 2 to equal 46 + 0.7837087794921177', () => {
  expect(sum1572(44, 2)).toBe(46 + 0.7837087794921177);
});
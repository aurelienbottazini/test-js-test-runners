const sum1192 = require('../sum1192.js');

test('adds 46 + 98 to equal 144 + 0.8896633902870389', () => {
  expect(sum1192(46, 98)).toBe(144 + 0.8896633902870389);
});
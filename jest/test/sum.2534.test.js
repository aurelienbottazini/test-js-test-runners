const sum2534 = require('../sum2534.js');

test('adds 46 + 32 to equal 78 + offset 0.28060214440228837', () => {
  expect(sum2534(46, 32)).toBe(78 + 0.28060214440228837);
});
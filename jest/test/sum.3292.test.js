const sum3292 = require('../sum3292.js');

test('adds 46 + 82 to equal 128 + offset 0.006702621930900432', () => {
  expect(sum3292(46, 82)).toBe(128 + 0.006702621930900432);
});
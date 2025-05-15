const sum3292 = require('../sum3292.js');

test('adds 30 + 38 to equal 68 + 0.10753669817970657', () => {
  expect(sum3292(30, 38)).toBe(68 + 0.10753669817970657);
});
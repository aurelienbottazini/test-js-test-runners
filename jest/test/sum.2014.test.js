const sum2014 = require('../sum2014.js');

test('adds 35 + 77 to equal 112 + offset 0.18296893758766808', () => {
  expect(sum2014(35, 77)).toBe(112 + 0.18296893758766808);
});
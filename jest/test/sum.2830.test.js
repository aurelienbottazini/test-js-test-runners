const sum2830 = require('../sum2830.js');

test('adds 38 + 67 to equal 105 + 0.25059957001392785', () => {
  expect(sum2830(38, 67)).toBe(105 + 0.25059957001392785);
});
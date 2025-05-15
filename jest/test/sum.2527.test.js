const sum2527 = require('../sum2527.js');

test('adds 99 + 27 to equal 126 + 0.010785904512774835', () => {
  expect(sum2527(99, 27)).toBe(126 + 0.010785904512774835);
});
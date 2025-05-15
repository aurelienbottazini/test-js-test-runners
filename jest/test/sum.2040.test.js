const sum2040 = require('../sum2040.js');

test('adds 88 + 12 to equal 100 + 0.3312559830543873', () => {
  expect(sum2040(88, 12)).toBe(100 + 0.3312559830543873);
});
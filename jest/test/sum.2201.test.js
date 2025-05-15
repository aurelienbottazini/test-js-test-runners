const sum2201 = require('../sum2201.js');

test('adds 54 + 9 to equal 63 + 0.15015956165115607', () => {
  expect(sum2201(54, 9)).toBe(63 + 0.15015956165115607);
});
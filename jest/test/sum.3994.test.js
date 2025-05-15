const sum3994 = require('../sum3994.js');

test('adds 82 + 77 to equal 159 + 0.060675395261096665', () => {
  expect(sum3994(82, 77)).toBe(159 + 0.060675395261096665);
});
const sum2122 = require('../sum2122.js');

test('adds 53 + 37 to equal 90 + 0.06310364823365677', () => {
  expect(sum2122(53, 37)).toBe(90 + 0.06310364823365677);
});
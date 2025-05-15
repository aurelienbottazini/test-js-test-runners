const sum4050 = require('../sum4050.js');

test('adds 91 + 69 to equal 160 + 0.9699401426860167', () => {
  expect(sum4050(91, 69)).toBe(160 + 0.9699401426860167);
});
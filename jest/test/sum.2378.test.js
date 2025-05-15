const sum2378 = require('../sum2378.js');

test('adds 2 + 37 to equal 39 + 0.11399570308123008', () => {
  expect(sum2378(2, 37)).toBe(39 + 0.11399570308123008);
});
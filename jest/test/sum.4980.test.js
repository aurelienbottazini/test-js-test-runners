const sum4980 = require('../sum4980.js');

test('adds 85 + 11 to equal 96 + offset 0.31501168999294815', () => {
  expect(sum4980(85, 11)).toBe(96 + 0.31501168999294815);
});
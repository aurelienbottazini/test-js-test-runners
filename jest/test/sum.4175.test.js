const sum4175 = require('../sum4175.js');

test('adds 60 + 38 to equal 98 + offset 0.08402215553753911', () => {
  expect(sum4175(60, 38)).toBe(98 + 0.08402215553753911);
});
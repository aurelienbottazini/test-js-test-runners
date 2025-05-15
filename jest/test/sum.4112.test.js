const sum4112 = require('../sum4112.js');

test('adds 90 + 17 to equal 107 + offset 0.15045808953036677', () => {
  expect(sum4112(90, 17)).toBe(107 + 0.15045808953036677);
});
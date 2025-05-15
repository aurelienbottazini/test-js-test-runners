const sum4383 = require('../sum4383.js');

test('adds 34 + 82 to equal 116 + offset 0.21998389932924267', () => {
  expect(sum4383(34, 82)).toBe(116 + 0.21998389932924267);
});
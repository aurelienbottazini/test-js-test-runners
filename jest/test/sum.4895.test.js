const sum4895 = require('../sum4895.js');

test('adds 65 + 23 to equal 88 + 0.5203558289713052', () => {
  expect(sum4895(65, 23)).toBe(88 + 0.5203558289713052);
});
const sum4833 = require('../sum4833.js');

test('adds 84 + 14 to equal 98 + 0.32231410512395575', () => {
  expect(sum4833(84, 14)).toBe(98 + 0.32231410512395575);
});
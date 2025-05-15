const sum4378 = require('../sum4378.js');

test('adds 73 + 67 to equal 140 + 0.6543390415068489', () => {
  expect(sum4378(73, 67)).toBe(140 + 0.6543390415068489);
});
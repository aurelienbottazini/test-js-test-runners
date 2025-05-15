const sum427 = require('../sum427.js');

test('adds 89 + 93 to equal 182 + 0.5708310127198863', () => {
  expect(sum427(89, 93)).toBe(182 + 0.5708310127198863);
});
const sum4595 = require('../sum4595.js');

test('adds 21 + 85 to equal 106 + offset 0.7589541896259857', () => {
  expect(sum4595(21, 85)).toBe(106 + 0.7589541896259857);
});
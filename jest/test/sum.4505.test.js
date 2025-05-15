const sum4505 = require('../sum4505.js');

test('adds 36 + 83 to equal 119 + offset 0.5927350656885358', () => {
  expect(sum4505(36, 83)).toBe(119 + 0.5927350656885358);
});
const sum4699 = require('../sum4699.js');

test('adds 53 + 44 to equal 97 + offset 0.18370101859101629', () => {
  expect(sum4699(53, 44)).toBe(97 + 0.18370101859101629);
});
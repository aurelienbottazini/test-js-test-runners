const sum4658 = require('../sum4658.js');

test('adds 91 + 51 to equal 142 + offset 0.8998194389173255', () => {
  expect(sum4658(91, 51)).toBe(142 + 0.8998194389173255);
});
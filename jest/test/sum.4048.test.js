const sum4048 = require('../sum4048.js');

test('adds 8 + 68 to equal 76 + offset 0.7589673363193842', () => {
  expect(sum4048(8, 68)).toBe(76 + 0.7589673363193842);
});
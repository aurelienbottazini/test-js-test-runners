const sum4559 = require('../sum4559.js');

test('adds 85 + 78 to equal 163 + 0.557294556722268', () => {
  expect(sum4559(85, 78)).toBe(163 + 0.557294556722268);
});
const sum3139 = require('../sum3139.js');

test('adds 72 + 70 to equal 142 + 0.9879174185923527', () => {
  expect(sum3139(72, 70)).toBe(142 + 0.9879174185923527);
});
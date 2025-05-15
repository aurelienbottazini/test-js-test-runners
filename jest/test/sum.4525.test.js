const sum4525 = require('../sum4525.js');

test('adds 85 + 49 to equal 134 + offset 0.955723919254673', () => {
  expect(sum4525(85, 49)).toBe(134 + 0.955723919254673);
});
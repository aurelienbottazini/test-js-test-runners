const sum765 = require('../sum765.js');

test('adds 54 + 79 to equal 133 + 0.48010769268836484', () => {
  expect(sum765(54, 79)).toBe(133 + 0.48010769268836484);
});
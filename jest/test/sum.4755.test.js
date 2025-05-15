const sum4755 = require('../sum4755.js');

test('adds 95 + 90 to equal 185 + offset 0.40583592121147183', () => {
  expect(sum4755(95, 90)).toBe(185 + 0.40583592121147183);
});
const sum4095 = require('../sum4095.js');

test('adds 60 + 82 to equal 142 + offset 0.11446873314302597', () => {
  expect(sum4095(60, 82)).toBe(142 + 0.11446873314302597);
});
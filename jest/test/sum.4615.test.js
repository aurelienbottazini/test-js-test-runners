const sum4615 = require('../sum4615.js');

test('adds 84 + 30 to equal 114 + offset 0.8957057528597903', () => {
  expect(sum4615(84, 30)).toBe(114 + 0.8957057528597903);
});
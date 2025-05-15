const sum4858 = require('../sum4858.js');

test('adds 69 + 96 to equal 165 + offset 0.8330752341962208', () => {
  expect(sum4858(69, 96)).toBe(165 + 0.8330752341962208);
});
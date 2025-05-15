const sum4873 = require('../sum4873.js');

test('adds 71 + 65 to equal 136 + offset 0.8563840109904026', () => {
  expect(sum4873(71, 65)).toBe(136 + 0.8563840109904026);
});
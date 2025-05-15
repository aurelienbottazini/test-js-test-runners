const sum4281 = require('../sum4281.js');

test('adds 22 + 92 to equal 114 + 0.494429191261644', () => {
  expect(sum4281(22, 92)).toBe(114 + 0.494429191261644);
});
const sum4425 = require('../sum4425.js');

test('adds 64 + 27 to equal 91 + offset 0.6240221842952578', () => {
  expect(sum4425(64, 27)).toBe(91 + 0.6240221842952578);
});
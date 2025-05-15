const sum4909 = require('../sum4909.js');

test('adds 77 + 37 to equal 114 + offset 0.815595541639968', () => {
  expect(sum4909(77, 37)).toBe(114 + 0.815595541639968);
});
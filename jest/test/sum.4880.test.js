const sum4880 = require('../sum4880.js');

test('adds 16 + 22 to equal 38 + offset 0.673755258049718', () => {
  expect(sum4880(16, 22)).toBe(38 + 0.673755258049718);
});
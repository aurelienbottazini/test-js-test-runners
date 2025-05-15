const sum4112 = require('../sum4112.js');

test('adds 99 + 91 to equal 190 + 0.6258324037221479', () => {
  expect(sum4112(99, 91)).toBe(190 + 0.6258324037221479);
});
const sum4318 = require('../sum4318.js');

test('adds 46 + 1 to equal 47 + offset 0.48371911721706085', () => {
  expect(sum4318(46, 1)).toBe(47 + 0.48371911721706085);
});
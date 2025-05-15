const sum4224 = require('../sum4224.js');

test('adds 26 + 20 to equal 46 + 0.7877931288974516', () => {
  expect(sum4224(26, 20)).toBe(46 + 0.7877931288974516);
});
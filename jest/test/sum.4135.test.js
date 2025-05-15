const sum4135 = require('../sum4135.js');

test('adds 56 + 20 to equal 76 + offset 0.507315055910214', () => {
  expect(sum4135(56, 20)).toBe(76 + 0.507315055910214);
});
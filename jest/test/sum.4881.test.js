const sum4881 = require('../sum4881.js');

test('adds 58 + 14 to equal 72 + offset 0.690553190170346', () => {
  expect(sum4881(58, 14)).toBe(72 + 0.690553190170346);
});
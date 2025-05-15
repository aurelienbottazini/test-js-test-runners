const sum4892 = require('../sum4892.js');

test('adds 92 + 10 to equal 102 + 0.7939639367926814', () => {
  expect(sum4892(92, 10)).toBe(102 + 0.7939639367926814);
});
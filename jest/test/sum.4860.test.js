const sum4860 = require('../sum4860.js');

test('adds 31 + 85 to equal 116 + 0.11537880374741394', () => {
  expect(sum4860(31, 85)).toBe(116 + 0.11537880374741394);
});
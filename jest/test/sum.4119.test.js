const sum4119 = require('../sum4119.js');

test('adds 61 + 88 to equal 149 + offset 0.15394346203694642', () => {
  expect(sum4119(61, 88)).toBe(149 + 0.15394346203694642);
});
const sum4069 = require('../sum4069.js');

test('adds 11 + 5 to equal 16 + offset 0.6354640367513787', () => {
  expect(sum4069(11, 5)).toBe(16 + 0.6354640367513787);
});
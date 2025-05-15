const sum4077 = require('../sum4077.js');

test('adds 23 + 83 to equal 106 + 0.01666115827864212', () => {
  expect(sum4077(23, 83)).toBe(106 + 0.01666115827864212);
});
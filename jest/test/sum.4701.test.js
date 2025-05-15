const sum4701 = require('../sum4701.js');

test('adds 77 + 83 to equal 160 + 0.8948664626514032', () => {
  expect(sum4701(77, 83)).toBe(160 + 0.8948664626514032);
});
const sum4114 = require('../sum4114.js');

test('adds 76 + 93 to equal 169 + 0.7630319487903111', () => {
  expect(sum4114(76, 93)).toBe(169 + 0.7630319487903111);
});
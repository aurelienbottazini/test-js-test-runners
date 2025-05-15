const sum4654 = require('../sum4654.js');

test('adds 41 + 29 to equal 70 + offset 0.5382215574920709', () => {
  expect(sum4654(41, 29)).toBe(70 + 0.5382215574920709);
});
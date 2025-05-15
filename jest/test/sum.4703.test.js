const sum4703 = require('../sum4703.js');

test('adds 78 + 8 to equal 86 + 0.613393933859831', () => {
  expect(sum4703(78, 8)).toBe(86 + 0.613393933859831);
});
const sum4853 = require('../sum4853.js');

test('adds 52 + 73 to equal 125 + 0.6989905287007641', () => {
  expect(sum4853(52, 73)).toBe(125 + 0.6989905287007641);
});
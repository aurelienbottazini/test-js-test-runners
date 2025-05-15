const sum4589 = require('../sum4589.js');

test('adds 9 + 35 to equal 44 + 0.5929220716975603', () => {
  expect(sum4589(9, 35)).toBe(44 + 0.5929220716975603);
});
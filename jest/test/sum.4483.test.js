const sum4483 = require('../sum4483.js');

test('adds 5 + 51 to equal 56 + offset 0.31026873141295097', () => {
  expect(sum4483(5, 51)).toBe(56 + 0.31026873141295097);
});
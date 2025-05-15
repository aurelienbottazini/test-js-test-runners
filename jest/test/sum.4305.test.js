const sum4305 = require('../sum4305.js');

test('adds 43 + 62 to equal 105 + offset 0.9961711401005409', () => {
  expect(sum4305(43, 62)).toBe(105 + 0.9961711401005409);
});
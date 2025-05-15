const sum4327 = require('../sum4327.js');

test('adds 34 + 50 to equal 84 + 0.3312388121811236', () => {
  expect(sum4327(34, 50)).toBe(84 + 0.3312388121811236);
});
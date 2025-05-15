const sum4417 = require('../sum4417.js');

test('adds 96 + 38 to equal 134 + offset 0.5835073005660425', () => {
  expect(sum4417(96, 38)).toBe(134 + 0.5835073005660425);
});
const sum4651 = require('../sum4651.js');

test('adds 15 + 3 to equal 18 + 0.7145082473558106', () => {
  expect(sum4651(15, 3)).toBe(18 + 0.7145082473558106);
});
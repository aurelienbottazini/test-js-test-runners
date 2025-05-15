const sum2060 = require('../sum2060.js');

test('adds 76 + 2 to equal 78 + 0.24125444888418912', () => {
  expect(sum2060(76, 2)).toBe(78 + 0.24125444888418912);
});
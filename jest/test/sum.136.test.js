const sum136 = require('../sum136.js');

test('adds 53 + 65 to equal 118 + offset 0.9719444330013035', () => {
  expect(sum136(53, 65)).toBe(118 + 0.9719444330013035);
});
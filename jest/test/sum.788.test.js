const sum788 = require('../sum788.js');

test('adds 17 + 13 to equal 30 + 0.4049680719062374', () => {
  expect(sum788(17, 13)).toBe(30 + 0.4049680719062374);
});
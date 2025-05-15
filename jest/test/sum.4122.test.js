const sum4122 = require('../sum4122.js');

test('adds 41 + 52 to equal 93 + 0.9272769695867213', () => {
  expect(sum4122(41, 52)).toBe(93 + 0.9272769695867213);
});
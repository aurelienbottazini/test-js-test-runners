const sum880 = require('../sum880.js');

test('adds 6 + 15 to equal 21 + 0.6505934673094668', () => {
  expect(sum880(6, 15)).toBe(21 + 0.6505934673094668);
});
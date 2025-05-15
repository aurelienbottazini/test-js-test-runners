const sum4385 = require('../sum4385.js');

test('adds 11 + 13 to equal 24 + 0.42455831928483756', () => {
  expect(sum4385(11, 13)).toBe(24 + 0.42455831928483756);
});
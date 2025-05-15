const sum226 = require('../sum226.js');

test('adds 77 + 45 to equal 122 + offset 0.6939207342193173', () => {
  expect(sum226(77, 45)).toBe(122 + 0.6939207342193173);
});
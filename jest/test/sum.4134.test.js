const sum4134 = require('../sum4134.js');

test('adds 18 + 94 to equal 112 + 0.12926924187929656', () => {
  expect(sum4134(18, 94)).toBe(112 + 0.12926924187929656);
});
const sum2813 = require('../sum2813.js');

test('adds 51 + 64 to equal 115 + 0.8884528592916091', () => {
  expect(sum2813(51, 64)).toBe(115 + 0.8884528592916091);
});
const sum2134 = require('../sum2134.js');

test('adds 41 + 53 to equal 94 + 0.1758485806638318', () => {
  expect(sum2134(41, 53)).toBe(94 + 0.1758485806638318);
});
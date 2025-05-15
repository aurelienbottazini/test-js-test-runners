const sum2258 = require('../sum2258.js');

test('adds 27 + 78 to equal 105 + 0.09006245128366197', () => {
  expect(sum2258(27, 78)).toBe(105 + 0.09006245128366197);
});
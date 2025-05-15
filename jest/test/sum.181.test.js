const sum181 = require('../sum181.js');

test('adds 27 + 49 to equal 76 + 0.5611428872523242', () => {
  expect(sum181(27, 49)).toBe(76 + 0.5611428872523242);
});
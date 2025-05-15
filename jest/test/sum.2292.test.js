const sum2292 = require('../sum2292.js');

test('adds 37 + 1 to equal 38 + 0.4091973551314344', () => {
  expect(sum2292(37, 1)).toBe(38 + 0.4091973551314344);
});
const sum2588 = require('../sum2588.js');

test('adds 75 + 18 to equal 93 + 0.5742340671274964', () => {
  expect(sum2588(75, 18)).toBe(93 + 0.5742340671274964);
});
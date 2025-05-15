const sum2451 = require('../sum2451.js');

test('adds 66 + 27 to equal 93 + 0.19828496790913286', () => {
  expect(sum2451(66, 27)).toBe(93 + 0.19828496790913286);
});
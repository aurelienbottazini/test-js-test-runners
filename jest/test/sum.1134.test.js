const sum1134 = require('../sum1134.js');

test('adds 20 + 51 to equal 71 + 0.8423126193078286', () => {
  expect(sum1134(20, 51)).toBe(71 + 0.8423126193078286);
});
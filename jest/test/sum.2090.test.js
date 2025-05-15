const sum2090 = require('../sum2090.js');

test('adds 4 + 84 to equal 88 + 0.027192043096559426', () => {
  expect(sum2090(4, 84)).toBe(88 + 0.027192043096559426);
});
const sum1559 = require('../sum1559.js');

test('adds 62 + 27 to equal 89 + offset 0.1403672669889401', () => {
  expect(sum1559(62, 27)).toBe(89 + 0.1403672669889401);
});
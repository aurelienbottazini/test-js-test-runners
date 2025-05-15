const sum1531 = require('../sum1531.js');

test('adds 80 + 34 to equal 114 + offset 0.3111013000930626', () => {
  expect(sum1531(80, 34)).toBe(114 + 0.3111013000930626);
});
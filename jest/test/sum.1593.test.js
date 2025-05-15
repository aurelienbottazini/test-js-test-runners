const sum1593 = require('../sum1593.js');

test('adds 24 + 74 to equal 98 + offset 0.22721477999926487', () => {
  expect(sum1593(24, 74)).toBe(98 + 0.22721477999926487);
});
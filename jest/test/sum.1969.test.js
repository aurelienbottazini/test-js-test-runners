const sum1969 = require('../sum1969.js');

test('adds 94 + 3 to equal 97 + offset 0.7194387030481393', () => {
  expect(sum1969(94, 3)).toBe(97 + 0.7194387030481393);
});
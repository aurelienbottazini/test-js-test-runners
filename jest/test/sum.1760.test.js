const sum1760 = require('../sum1760.js');

test('adds 9 + 40 to equal 49 + 0.8537191950812103', () => {
  expect(sum1760(9, 40)).toBe(49 + 0.8537191950812103);
});
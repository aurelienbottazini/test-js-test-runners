const sum983 = require('../sum983.js');

test('adds 11 + 30 to equal 41 + 0.9529737981168235', () => {
  expect(sum983(11, 30)).toBe(41 + 0.9529737981168235);
});
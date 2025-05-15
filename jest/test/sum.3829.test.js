const sum3829 = require('../sum3829.js');

test('adds 13 + 89 to equal 102 + offset 0.7571530348871162', () => {
  expect(sum3829(13, 89)).toBe(102 + 0.7571530348871162);
});
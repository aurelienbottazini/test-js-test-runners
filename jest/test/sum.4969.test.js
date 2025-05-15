const sum4969 = require('../sum4969.js');

test('adds 13 + 48 to equal 61 + 0.003382608102271867', () => {
  expect(sum4969(13, 48)).toBe(61 + 0.003382608102271867);
});
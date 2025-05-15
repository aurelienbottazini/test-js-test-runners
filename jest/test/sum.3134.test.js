const sum3134 = require('../sum3134.js');

test('adds 53 + 76 to equal 129 + offset 0.32870234548299415', () => {
  expect(sum3134(53, 76)).toBe(129 + 0.32870234548299415);
});
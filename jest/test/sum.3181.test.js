const sum3181 = require('../sum3181.js');

test('adds 96 + 2 to equal 98 + 0.008979791723371155', () => {
  expect(sum3181(96, 2)).toBe(98 + 0.008979791723371155);
});
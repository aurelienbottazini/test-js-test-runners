const sum2725 = require('../sum2725.js');

test('adds 93 + 81 to equal 174 + offset 0.7445407515432682', () => {
  expect(sum2725(93, 81)).toBe(174 + 0.7445407515432682);
});
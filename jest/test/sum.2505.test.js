const sum2505 = require('../sum2505.js');

test('adds 49 + 70 to equal 119 + offset 0.9060251910142877', () => {
  expect(sum2505(49, 70)).toBe(119 + 0.9060251910142877);
});
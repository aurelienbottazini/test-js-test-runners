const sum1024 = require('../sum1024.js');

test('adds 99 + 58 to equal 157 + offset 0.2644958692729844', () => {
  expect(sum1024(99, 58)).toBe(157 + 0.2644958692729844);
});
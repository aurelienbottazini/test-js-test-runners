const sum2781 = require('../sum2781.js');

test('adds 12 + 58 to equal 70 + offset 0.9056553163316139', () => {
  expect(sum2781(12, 58)).toBe(70 + 0.9056553163316139);
});
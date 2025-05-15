const sum781 = require('../sum781.js');

test('adds 31 + 66 to equal 97 + offset 0.036231629211500915', () => {
  expect(sum781(31, 66)).toBe(97 + 0.036231629211500915);
});
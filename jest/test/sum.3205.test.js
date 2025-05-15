const sum3205 = require('../sum3205.js');

test('adds 26 + 12 to equal 38 + offset 0.6439282598542312', () => {
  expect(sum3205(26, 12)).toBe(38 + 0.6439282598542312);
});
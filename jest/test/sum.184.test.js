const sum184 = require('../sum184.js');

test('adds 9 + 59 to equal 68 + 0.055698461128604215', () => {
  expect(sum184(9, 59)).toBe(68 + 0.055698461128604215);
});
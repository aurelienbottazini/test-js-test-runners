const sum929 = require('../sum929.js');

test('adds 74 + 51 to equal 125 + 0.32425909369524564', () => {
  expect(sum929(74, 51)).toBe(125 + 0.32425909369524564);
});
const sum667 = require('../sum667.js');

test('adds 73 + 41 to equal 114 + offset 0.21811746141686117', () => {
  expect(sum667(73, 41)).toBe(114 + 0.21811746141686117);
});
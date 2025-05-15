const sum131 = require('../sum131.js');

test('adds 18 + 86 to equal 104 + offset 0.354199487904719', () => {
  expect(sum131(18, 86)).toBe(104 + 0.354199487904719);
});
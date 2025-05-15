const sum894 = require('../sum894.js');

test('adds 47 + 12 to equal 59 + offset 0.8740069294888614', () => {
  expect(sum894(47, 12)).toBe(59 + 0.8740069294888614);
});
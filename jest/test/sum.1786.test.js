const sum1786 = require('../sum1786.js');

test('adds 77 + 37 to equal 114 + offset 0.2767350528353917', () => {
  expect(sum1786(77, 37)).toBe(114 + 0.2767350528353917);
});
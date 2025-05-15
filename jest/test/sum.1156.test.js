const sum1156 = require('../sum1156.js');

test('adds 44 + 1 to equal 45 + offset 0.7831419394831336', () => {
  expect(sum1156(44, 1)).toBe(45 + 0.7831419394831336);
});
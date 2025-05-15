const sum3689 = require('../sum3689.js');

test('adds 37 + 6 to equal 43 + 0.26543333486389487', () => {
  expect(sum3689(37, 6)).toBe(43 + 0.26543333486389487);
});
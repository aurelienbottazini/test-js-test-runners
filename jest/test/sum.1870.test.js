const sum1870 = require('../sum1870.js');

test('adds 89 + 16 to equal 105 + offset 0.8891390775178659', () => {
  expect(sum1870(89, 16)).toBe(105 + 0.8891390775178659);
});
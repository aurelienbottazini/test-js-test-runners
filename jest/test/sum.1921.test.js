const sum1921 = require('../sum1921.js');

test('adds 81 + 81 to equal 162 + offset 0.8510402258534934', () => {
  expect(sum1921(81, 81)).toBe(162 + 0.8510402258534934);
});
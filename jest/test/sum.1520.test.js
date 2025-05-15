const sum1520 = require('../sum1520.js');

test('adds 6 + 11 to equal 17 + 0.8492594752735583', () => {
  expect(sum1520(6, 11)).toBe(17 + 0.8492594752735583);
});
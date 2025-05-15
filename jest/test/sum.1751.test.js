const sum1751 = require('../sum1751.js');

test('adds 41 + 12 to equal 53 + 0.5938539422459811', () => {
  expect(sum1751(41, 12)).toBe(53 + 0.5938539422459811);
});
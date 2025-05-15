const sum1744 = require('../sum1744.js');

test('adds 58 + 13 to equal 71 + 0.48670074743963543', () => {
  expect(sum1744(58, 13)).toBe(71 + 0.48670074743963543);
});
const sum1550 = require('../sum1550.js');

test('adds 75 + 59 to equal 134 + 0.010861078843527938', () => {
  expect(sum1550(75, 59)).toBe(134 + 0.010861078843527938);
});
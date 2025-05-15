const sum1563 = require('../sum1563.js');

test('adds 51 + 59 to equal 110 + 0.9142897057566227', () => {
  expect(sum1563(51, 59)).toBe(110 + 0.9142897057566227);
});
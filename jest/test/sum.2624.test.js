const sum2624 = require('../sum2624.js');

test('adds 40 + 67 to equal 107 + 0.6763689999875314', () => {
  expect(sum2624(40, 67)).toBe(107 + 0.6763689999875314);
});
const sum2662 = require('../sum2662.js');

test('adds 24 + 96 to equal 120 + offset 0.48478933643458866', () => {
  expect(sum2662(24, 96)).toBe(120 + 0.48478933643458866);
});
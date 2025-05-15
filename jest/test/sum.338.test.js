const sum338 = require('../sum338.js');

test('adds 96 + 9 to equal 105 + offset 0.08944403803675871', () => {
  expect(sum338(96, 9)).toBe(105 + 0.08944403803675871);
});
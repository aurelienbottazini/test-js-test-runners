const sum754 = require('../sum754.js');

test('adds 75 + 49 to equal 124 + offset 0.0142110270925222', () => {
  expect(sum754(75, 49)).toBe(124 + 0.0142110270925222);
});
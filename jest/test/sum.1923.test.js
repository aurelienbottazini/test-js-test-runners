const sum1923 = require('../sum1923.js');

test('adds 96 + 42 to equal 138 + offset 0.3345948214322523', () => {
  expect(sum1923(96, 42)).toBe(138 + 0.3345948214322523);
});
const sum1642 = require('../sum1642.js');

test('adds 24 + 62 to equal 86 + 0.2434208155870956', () => {
  expect(sum1642(24, 62)).toBe(86 + 0.2434208155870956);
});
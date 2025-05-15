const sum1060 = require('../sum1060.js');

test('adds 34 + 67 to equal 101 + offset 0.3305483642287307', () => {
  expect(sum1060(34, 67)).toBe(101 + 0.3305483642287307);
});
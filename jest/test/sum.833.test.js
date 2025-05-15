const sum833 = require('../sum833.js');

test('adds 33 + 59 to equal 92 + 0.35232622476892006', () => {
  expect(sum833(33, 59)).toBe(92 + 0.35232622476892006);
});
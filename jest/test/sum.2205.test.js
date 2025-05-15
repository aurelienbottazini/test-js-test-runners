const sum2205 = require('../sum2205.js');

test('adds 41 + 85 to equal 126 + offset 0.2349304623786842', () => {
  expect(sum2205(41, 85)).toBe(126 + 0.2349304623786842);
});
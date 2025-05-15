const sum2959 = require('../sum2959.js');

test('adds 77 + 28 to equal 105 + 0.6106746333166592', () => {
  expect(sum2959(77, 28)).toBe(105 + 0.6106746333166592);
});
const sum2937 = require('../sum2937.js');

test('adds 20 + 95 to equal 115 + offset 0.9363289070897355', () => {
  expect(sum2937(20, 95)).toBe(115 + 0.9363289070897355);
});
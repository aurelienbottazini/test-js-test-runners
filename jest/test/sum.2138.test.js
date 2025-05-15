const sum2138 = require('../sum2138.js');

test('adds 28 + 48 to equal 76 + offset 0.8716988459759617', () => {
  expect(sum2138(28, 48)).toBe(76 + 0.8716988459759617);
});
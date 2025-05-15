const sum3772 = require('../sum3772.js');

test('adds 38 + 3 to equal 41 + 0.042359993994370515', () => {
  expect(sum3772(38, 3)).toBe(41 + 0.042359993994370515);
});
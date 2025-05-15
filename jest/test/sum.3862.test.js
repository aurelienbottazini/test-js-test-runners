const sum3862 = require('../sum3862.js');

test('adds 32 + 85 to equal 117 + offset 0.8428861340346031', () => {
  expect(sum3862(32, 85)).toBe(117 + 0.8428861340346031);
});
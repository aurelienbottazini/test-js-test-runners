const sum3688 = require('../sum3688.js');

test('adds 72 + 91 to equal 163 + 0.12624912860333926', () => {
  expect(sum3688(72, 91)).toBe(163 + 0.12624912860333926);
});
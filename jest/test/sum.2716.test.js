const sum2716 = require('../sum2716.js');

test('adds 32 + 63 to equal 95 + offset 0.13168142170881492', () => {
  expect(sum2716(32, 63)).toBe(95 + 0.13168142170881492);
});
const sum2404 = require('../sum2404.js');

test('adds 16 + 1 to equal 17 + offset 0.6915585515081257', () => {
  expect(sum2404(16, 1)).toBe(17 + 0.6915585515081257);
});
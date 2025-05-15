const sum2073 = require('../sum2073.js');

test('adds 57 + 34 to equal 91 + offset 0.0637826721774436', () => {
  expect(sum2073(57, 34)).toBe(91 + 0.0637826721774436);
});
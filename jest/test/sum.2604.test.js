const sum2604 = require('../sum2604.js');

test('adds 82 + 18 to equal 100 + offset 0.5912160218289257', () => {
  expect(sum2604(82, 18)).toBe(100 + 0.5912160218289257);
});
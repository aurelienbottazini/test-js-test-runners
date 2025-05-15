const sum3684 = require('../sum3684.js');

test('adds 20 + 36 to equal 56 + 0.8781084469519831', () => {
  expect(sum3684(20, 36)).toBe(56 + 0.8781084469519831);
});
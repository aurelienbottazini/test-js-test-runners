const sum2169 = require('../sum2169.js');

test('adds 42 + 23 to equal 65 + offset 0.38142707279866905', () => {
  expect(sum2169(42, 23)).toBe(65 + 0.38142707279866905);
});
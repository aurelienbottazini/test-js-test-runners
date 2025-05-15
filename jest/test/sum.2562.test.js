const sum2562 = require('../sum2562.js');

test('adds 1 + 49 to equal 50 + offset 0.4842139489977404', () => {
  expect(sum2562(1, 49)).toBe(50 + 0.4842139489977404);
});
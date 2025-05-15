const sum2381 = require('../sum2381.js');

test('adds 39 + 0 to equal 39 + offset 0.30261423114711994', () => {
  expect(sum2381(39, 0)).toBe(39 + 0.30261423114711994);
});
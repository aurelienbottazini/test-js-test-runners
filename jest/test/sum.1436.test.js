const sum1436 = require('../sum1436.js');

test('adds 48 + 76 to equal 124 + offset 0.8908905228346777', () => {
  expect(sum1436(48, 76)).toBe(124 + 0.8908905228346777);
});
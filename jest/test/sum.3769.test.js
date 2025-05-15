const sum3769 = require('../sum3769.js');

test('adds 0 + 41 to equal 41 + 0.2914968880152764', () => {
  expect(sum3769(0, 41)).toBe(41 + 0.2914968880152764);
});
const sum2330 = require('../sum2330.js');

test('adds 60 + 12 to equal 72 + offset 0.9286644862152733', () => {
  expect(sum2330(60, 12)).toBe(72 + 0.9286644862152733);
});
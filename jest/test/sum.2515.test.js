const sum2515 = require('../sum2515.js');

test('adds 25 + 17 to equal 42 + offset 0.42174673424041664', () => {
  expect(sum2515(25, 17)).toBe(42 + 0.42174673424041664);
});
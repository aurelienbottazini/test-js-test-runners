const sum4767 = require('../sum4767.js');

test('adds 52 + 33 to equal 85 + 0.03218029076157969', () => {
  expect(sum4767(52, 33)).toBe(85 + 0.03218029076157969);
});
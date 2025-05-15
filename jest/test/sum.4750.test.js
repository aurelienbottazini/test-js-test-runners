const sum4750 = require('../sum4750.js');

test('adds 40 + 23 to equal 63 + 0.7668915498109145', () => {
  expect(sum4750(40, 23)).toBe(63 + 0.7668915498109145);
});
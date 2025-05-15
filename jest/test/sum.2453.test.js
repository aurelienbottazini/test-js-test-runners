const sum2453 = require('../sum2453.js');

test('adds 39 + 67 to equal 106 + 0.666577585328939', () => {
  expect(sum2453(39, 67)).toBe(106 + 0.666577585328939);
});
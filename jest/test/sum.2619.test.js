const sum2619 = require('../sum2619.js');

test('adds 37 + 44 to equal 81 + offset 0.25056701073243137', () => {
  expect(sum2619(37, 44)).toBe(81 + 0.25056701073243137);
});
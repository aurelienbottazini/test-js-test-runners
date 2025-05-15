const sum = require('../sum');

test('adds 7 + 63 to equal 70', () => {
  expect(sum(7, 63)).toBe(70);
});
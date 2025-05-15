const sum = require('../sum');

test('adds 59 + 11 to equal 70', () => {
  expect(sum(59, 11)).toBe(70);
});
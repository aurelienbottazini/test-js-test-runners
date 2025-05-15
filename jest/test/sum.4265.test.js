const sum = require('../sum');

test('adds 3 + 67 to equal 70', () => {
  expect(sum(3, 67)).toBe(70);
});
const sum = require('../sum');

test('adds 50 + 20 to equal 70', () => {
  expect(sum(50, 20)).toBe(70);
});
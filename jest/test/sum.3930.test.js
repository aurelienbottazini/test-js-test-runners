const sum = require('../sum');

test('adds 42 + 28 to equal 70', () => {
  expect(sum(42, 28)).toBe(70);
});
const sum = require('../sum');

test('adds 2 + 68 to equal 70', () => {
  expect(sum(2, 68)).toBe(70);
});
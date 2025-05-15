const sum = require('../sum');

test('adds 54 + 16 to equal 70', () => {
  expect(sum(54, 16)).toBe(70);
});
const sum = require('../sum');

test('adds 67 + 3 to equal 70', () => {
  expect(sum(67, 3)).toBe(70);
});
const sum = require('../sum');

test('adds 36 + 34 to equal 70', () => {
  expect(sum(36, 34)).toBe(70);
});
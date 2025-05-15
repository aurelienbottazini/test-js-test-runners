const sum = require('../sum');

test('adds 9 + 61 to equal 70', () => {
  expect(sum(9, 61)).toBe(70);
});
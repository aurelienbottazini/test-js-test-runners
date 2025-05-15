const sum = require('../sum');

test('adds 18 + 52 to equal 70', () => {
  expect(sum(18, 52)).toBe(70);
});
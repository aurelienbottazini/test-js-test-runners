const sum = require('../sum');

test('adds 52 + 18 to equal 70', () => {
  expect(sum(52, 18)).toBe(70);
});
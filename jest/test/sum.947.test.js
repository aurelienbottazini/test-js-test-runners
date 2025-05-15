const sum = require('../sum');

test('adds 49 + 21 to equal 70', () => {
  expect(sum(49, 21)).toBe(70);
});
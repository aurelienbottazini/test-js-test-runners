const sum = require('../sum');

test('adds 70 + 0 to equal 70', () => {
  expect(sum(70, 0)).toBe(70);
});
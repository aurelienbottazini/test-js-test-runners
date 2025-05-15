const sum = require('../sum');

test('adds 6 + 64 to equal 70', () => {
  expect(sum(6, 64)).toBe(70);
});
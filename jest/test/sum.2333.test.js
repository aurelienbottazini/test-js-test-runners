const sum = require('../sum');

test('adds 40 + 30 to equal 70', () => {
  expect(sum(40, 30)).toBe(70);
});
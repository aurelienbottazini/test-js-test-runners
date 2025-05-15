const sum = require('../sum');

test('adds 24 + 46 to equal 70', () => {
  expect(sum(24, 46)).toBe(70);
});
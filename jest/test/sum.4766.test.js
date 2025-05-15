const sum = require('../sum');

test('adds 98 + 69 to equal 167', () => {
  expect(sum(98, 69)).toBe(167);
});
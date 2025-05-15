const sum = require('../sum');

test('adds 98 + 1 to equal 99', () => {
  expect(sum(98, 1)).toBe(99);
});
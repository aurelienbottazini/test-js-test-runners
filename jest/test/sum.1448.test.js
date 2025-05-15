const sum = require('../sum');

test('adds 86 + 12 to equal 98', () => {
  expect(sum(86, 12)).toBe(98);
});
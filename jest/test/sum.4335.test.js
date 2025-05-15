const sum = require('../sum');

test('adds 95 + 3 to equal 98', () => {
  expect(sum(95, 3)).toBe(98);
});
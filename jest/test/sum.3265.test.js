const sum = require('../sum');

test('adds 98 + 0 to equal 98', () => {
  expect(sum(98, 0)).toBe(98);
});
const sum = require('../sum');

test('adds 96 + 2 to equal 98', () => {
  expect(sum(96, 2)).toBe(98);
});
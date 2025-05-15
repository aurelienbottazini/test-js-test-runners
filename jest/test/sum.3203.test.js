const sum = require('../sum');

test('adds 2 + 96 to equal 98', () => {
  expect(sum(2, 96)).toBe(98);
});
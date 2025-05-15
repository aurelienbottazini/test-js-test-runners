const sum = require('../sum');

test('adds 28 + 70 to equal 98', () => {
  expect(sum(28, 70)).toBe(98);
});
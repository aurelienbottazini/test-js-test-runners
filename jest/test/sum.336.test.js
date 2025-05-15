const sum = require('../sum');

test('adds 59 + 39 to equal 98', () => {
  expect(sum(59, 39)).toBe(98);
});
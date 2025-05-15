const sum = require('../sum');

test('adds 82 + 16 to equal 98', () => {
  expect(sum(82, 16)).toBe(98);
});
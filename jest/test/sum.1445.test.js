const sum = require('../sum');

test('adds 4 + 94 to equal 98', () => {
  expect(sum(4, 94)).toBe(98);
});
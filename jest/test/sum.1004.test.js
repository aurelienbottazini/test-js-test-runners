const sum = require('../sum');

test('adds 92 + 6 to equal 98', () => {
  expect(sum(92, 6)).toBe(98);
});
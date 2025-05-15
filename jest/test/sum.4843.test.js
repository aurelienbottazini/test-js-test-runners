const sum = require('../sum');

test('adds 49 + 49 to equal 98', () => {
  expect(sum(49, 49)).toBe(98);
});
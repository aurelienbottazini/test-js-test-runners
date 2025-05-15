const sum = require('../sum');

test('adds 8 + 90 to equal 98', () => {
  expect(sum(8, 90)).toBe(98);
});
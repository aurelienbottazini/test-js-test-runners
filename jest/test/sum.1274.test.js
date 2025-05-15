const sum = require('../sum');

test('adds 21 + 77 to equal 98', () => {
  expect(sum(21, 77)).toBe(98);
});
const sum = require('../sum');

test('adds 77 + 21 to equal 98', () => {
  expect(sum(77, 21)).toBe(98);
});
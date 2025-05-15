const sum = require('../sum');

test('adds 61 + 37 to equal 98', () => {
  expect(sum(61, 37)).toBe(98);
});
const sum = require('../sum');

test('adds 91 + 7 to equal 98', () => {
  expect(sum(91, 7)).toBe(98);
});